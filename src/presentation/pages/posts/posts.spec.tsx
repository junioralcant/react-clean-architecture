import {describe, expect, it} from 'vitest';
import {render, screen, waitFor} from '@testing-library/react';
import {Post} from './posts';
import {PostListUseCaseInMemory} from '../../../data/useCases/post-list-usecase/in-memory/post-list.usecase.in.memory';

function makeSut() {
  render(<Post postListUseCase={new PostListUseCaseInMemory()} />);
}

describe('Post', () => {
  it('Should return Post with corrects length', async () => {
    makeSut();

    await waitFor(() =>
      screen.getByText('Create a login form using formik in react js')
    );

    expect(screen.getAllByTestId('post').length).toBe(2);
  });
});
