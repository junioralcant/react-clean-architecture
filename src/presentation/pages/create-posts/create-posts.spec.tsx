import {describe, expect, it} from 'vitest';
import {render, screen, fireEvent} from '@testing-library/react';
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

function makeSut() {
  const createPostUseCaseInMemory = new CreatePostUseCaseInMemory();
  render(
    <CreatePost createPostUseCase={createPostUseCaseInMemory} />
  );

  return {
    createPostUseCaseInMemory,
  };
}

describe('CreatePost', () => {
  it('Should call PostCreateUseCase.create with correct params', () => {
    const {createPostUseCaseInMemory} = makeSut();

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

    expect(createPostUseCaseInMemory.title).toBe(inputTitle.value);
    expect(createPostUseCaseInMemory.body).toBe(inputBody.value);
  });
});
