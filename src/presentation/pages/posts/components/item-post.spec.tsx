import {describe, expect, it} from 'vitest';
import {render, screen} from '@testing-library/react';
import {ItemPost} from './item-post';
import {postsListMock} from '../../../../data/mocks/post-list.mock';

function makeSut() {
  render(<ItemPost post={postsListMock()[1]} />);
}

describe('ItemPost', () => {
  it('Should return ItemPost with correct values', () => {
    makeSut();
    expect(
      screen.getByText(
        'Create a login form using formik in react js 2'
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        'Todays article will demonstrate how to develop a login form in react js using formik. 2'
      )
    ).toBeInTheDocument();
  });
});
