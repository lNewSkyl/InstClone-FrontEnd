import { PostsState } from "./postSlice";

const API_URL = "http://localhost:3000/api/v1";

export async function fetchPosts() {
  return fetch(`${API_URL}/posts`, {
    method: "GET",
  })
  .then((response) => response.json())
  .catch((error) => {
    console.log("Error:", error);
    return {} as PostsState;
  });
}
