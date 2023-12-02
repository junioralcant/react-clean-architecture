import {useEffect, useState} from 'react';

import {IPostList} from '@domain/contracts';

import {ItemPost} from './components';

type Props = {
  postListUseCase: IPostList;
};
export function Post({postListUseCase}: Props) {
  const [posts, setPosts] = useState<IPostList.Model>([]);

  useEffect(() => {
    async function loadPosts() {
      const result = await postListUseCase.list();
      setPosts(result);
    }

    loadPosts();
  }, []);

  return posts.map((post) => (
    <ItemPost key={post.id} data-testid="post" post={post} />
  ));
}
