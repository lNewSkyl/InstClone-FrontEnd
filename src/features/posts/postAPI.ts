import { PostDeleteData, PostFormData, PostsState } from "./postSlice";

const API_URL = "http://localhost:3000/api/v1";

export async function fetchPosts() {
  return fetch(`${API_URL}/posts.json`, {
    method: "GET",
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log("Error: ", error);
      return {} as PostsState;
    });
}

export async function createPost(payload: PostFormData) {
  const post = payload.post;
  return fetch(`${API_URL}/posts.json`, {
    method: "POST",
    body: JSON.stringify({
      post,
    }),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log("Error: ", error);
      return {} as PostsState;
    });
}

export async function updatePost(payload: PostFormData) {
  const post = payload.post;
  return fetch(`${API_URL}/posts/${post.id}.json`, {
    method: "PUT",
    body: JSON.stringify({
      post,
    }),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log("Error: ", error);
      return {} as PostsState;
    });
}

export async function destroyPost(payload: PostDeleteData) {
  const post = payload.post;
  return fetch(`${API_URL}/posts/${post.post_id}.json`, {
    method: "DELETE",
    body: JSON.stringify({
      post,
    }),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.log("Error: ", error);
      return {} as PostsState;
    });
}
