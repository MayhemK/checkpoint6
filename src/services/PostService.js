import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"

class PostService{
  async makePost(postData){
    const res = await api.put('api/posts', postData)
    logger.log('New Post', res.data)
  }
}

export const postService = new PostService()