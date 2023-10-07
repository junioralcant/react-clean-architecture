import {PostListUseCase} from '../data/useCases/PostListUseCase/post-list.usecase';
import {AxiosHttpClient} from '../infra/implementations/axios-http-client/axios-http-client';
import './App.css';
import {Post} from './pages/posts/posts';

function App() {
  const postListUseCase = new PostListUseCase(new AxiosHttpClient());
  return <Post postListUseCase={postListUseCase} />;
}

export default App;
