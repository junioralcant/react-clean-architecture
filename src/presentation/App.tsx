import {PostCreateUseCase, PostListUseCase} from '@data/useCases';

import {AxiosHttpClient} from '../infra/implementations/axios-http-client/axios-http-client';

import './App.css';

import {CreatePost} from './pages/create-posts/create-posts';
import {Post} from './pages/posts/posts';

function App() {
  const postListUseCase = new PostListUseCase(new AxiosHttpClient());
  const posCreateUseCase = new PostCreateUseCase(
    new AxiosHttpClient()
  );

  return (
    <>
      <CreatePost createPostUseCase={posCreateUseCase} />
      <Post postListUseCase={postListUseCase} />
    </>
  );
}

export default App;
