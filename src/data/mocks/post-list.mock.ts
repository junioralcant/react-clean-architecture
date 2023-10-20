import {PostModel} from '../../domain/models/post.model';

export function postsListMock(): PostModel[] {
  return [
    {
      id: '1',
      title: 'Create a login form using formik in react js',
      body: 'Todays article will demonstrate how to develop a login form in react js using formik.',
    },
    {
      id: '2',
      title: 'Create a login form using formik in react js 2',
      body: 'Todays article will demonstrate how to develop a login form in react js using formik. 2',
    },
  ];
}
