import { logger } from "@/utils/Logger.js";
import { api } from "./AxiosService.js";
import { AppState } from "@/AppState.js";

class FeedService{
  async getAllPosts() {
    const res = await api.get('api/posts')
// const posts = res.data.posts.map(pojo => new posts(pojo)) 
    logger.log('got posts', res.data)
}
}

export const feedService = new FeedService()