import {describe, expect, it} from 'vitest';
import {render, screen, waitFor} from '@testing-library/react';
import {Post} from './posts';
import {IPostList} from '../../../domain/contracts/post.contracts';
import {postsListMock} from '../../../data/mocks/post-list.mock';

class postListUseCaseInMemory implements IPostList {
  async list(): Promise<IPostList.Model> {
    return await Promise.resolve(postsListMock());
  }
}

function makeSut() {
  render(<Post postListUseCase={new postListUseCaseInMemory()} />);
}

describe('Post', () => {
  it('Should return ItemPost with correct values', async () => {
    makeSut();

    await waitFor(() =>
      screen.getByText('Create a login form using formik in react js')
    );

    expect(screen.getAllByTestId('post').length).toBe(2);
  });
});
