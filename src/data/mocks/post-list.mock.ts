import {PostModel, PostModelAPI} from '@domain/models';

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

export function postsListAPIMock(): PostModelAPI[] {
  return [
    {
      id: '1',
      title_post: 'Create a login form using formik in react js',
      body_post:
        'Todays article will demonstrate how to develop a login form in react js using formik.',
    },
    {
      id: '2',
      title_post: 'How to parse or read CSV files in ReactJS',
      body_post:
        'In this article, I will teach you how to parse or read CSV files in ReactJS in the simplest way possible. ',
    },
  ];
}
