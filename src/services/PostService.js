import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { Post } from "@/models/Post.js"

class PostService{
  async makePost(postData){
    const res = await api.post('api/posts', postData)
    logger.log('New Post', res.data)
    const post = new Post(res.data)
    AppState.posts.push(post)
  }
}

export const postService = new PostService()