import {PostListUseCase} from '../data/useCases/PostListUseCase/post-list.usecase';
import './App.css';
import {Post} from './pages/posts/posts';

function App() {
  const postListUseCase = new PostListUseCase();
  return <Post postListUseCase={postListUseCase} />;
}

export default App;
