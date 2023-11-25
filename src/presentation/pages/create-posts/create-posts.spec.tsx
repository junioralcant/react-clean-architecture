import {describe, expect, it, vi} from 'vitest';
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react';
import {CreatePost} from './create-posts';
import {IPostCreate} from '../../../domain/contracts/post-create.contracts';
import {PostModel} from '../../../domain/models/post.model';
import {postsListMock} from '../../../data/mocks/post-list.mock';

class CreatePostUseCaseInMemory implements IPostCreate {
  title = '';
  body = '';
  post: PostModel = postsListMock()[0];

  async create(params: IPostCreate.Params): Promise<PostModel> {
    this.title = params.title;
    this.body = params.body;
    return await Promise.resolve(this.post);
  }
}

type SutParams = {
  createPostUseCaseInMemory?: CreatePostUseCaseInMemory;
};

function makeSut({
  createPostUseCaseInMemory = new CreatePostUseCaseInMemory(),
}: SutParams = {}) {
  render(
    <CreatePost createPostUseCase={createPostUseCaseInMemory} />
  );

  return {
    createPostUseCaseInMemory,
  };
}

function filledFormCreatePost() {
  const inputTitle = screen.getByPlaceholderText(
    'Titulo'
  ) as HTMLInputElement;

  const inputBody = screen.getByPlaceholderText(
    'Corpo'
  ) as HTMLInputElement;

  fireEvent.change(inputTitle, {
    target: {value: 'Meu titulo é esse'},
  });

  fireEvent.change(inputBody, {
    target: {value: 'Meu corpo é esse'},
  });

  fireEvent.click(screen.getByText('Adicionar'));

  return {
    inputTitle,
    inputBody,
  };
}

describe('CreatePost', () => {
  it('Should call PostCreateUseCase.create with correct params', () => {
    const {createPostUseCaseInMemory} = makeSut();

    const {inputBody, inputTitle} = filledFormCreatePost();

    expect(createPostUseCaseInMemory.title).toBe(inputTitle.value);
    expect(createPostUseCaseInMemory.body).toBe(inputBody.value);
  });

  it('Should show message success if create post ok', async () => {
    makeSut();

    filledFormCreatePost();

    await waitFor(() => screen.getByText('Post criado com sucesso!'));

    expect(
      screen.getByText('Post criado com sucesso!')
    ).toBeInTheDocument();
  });

  it('Should show message error if create post failed', async () => {
    const createPostUseCaseInMemory = new CreatePostUseCaseInMemory();
    vi.spyOn(
      createPostUseCaseInMemory,
      'create'
    ).mockRejectedValueOnce(() => Promise.reject(new Error()));

    makeSut({createPostUseCaseInMemory});

    filledFormCreatePost();

    await waitFor(() =>
      screen.getByText('Error ao criar novo post!')
    );

    expect(
      screen.getByText('Error ao criar novo post!')
    ).toBeInTheDocument();
  });
});
