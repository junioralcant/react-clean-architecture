import {PostCreateUseCase, PostListUseCase} from '@data/useCases';
import {AxiosHttpClient} from '@infra/implementations';

import {CreatePost, Post} from './pages';
import './App.css';

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
