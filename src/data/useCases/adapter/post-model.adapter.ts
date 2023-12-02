import {PostModel, PostModelAPI} from '@domain/models';

function toPostModel(postApi: PostModelAPI): PostModel {
  return {
    id: postApi.id,
    title: postApi.title_post,
    body: postApi.body_post,
  };
}

export const postModelAdapter = {toPostModel};
