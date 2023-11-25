import {PostCreateUseCase} from '../data/useCases/post-create-usecase/post-create.usecase';
import {PostListUseCase} from '../data/useCases/post-list-usecase/post-list.usecase';
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
