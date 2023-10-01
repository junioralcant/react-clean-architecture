import {useEffect, useState} from 'react';
import {PostModel} from '../../../domain/models/post.model';
import {ItemPost} from './components/item-post';
import {IPostList} from '../../../domain/contracts/post.contracts';

type Props = {
  postListUseCase: IPostList;
};
export function Post({postListUseCase}: Props) {
  const [posts, setPosts] = useState<PostModel[]>([]);

  useEffect(() => {
    async function loadPosts() {
      const result = await postListUseCase.list();
      setPosts(result);
    }

    loadPosts();
  }, []);

  return posts.map((post) => <ItemPost post={post} />);
}
