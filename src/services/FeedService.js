import { logger } from "@/utils/Logger.js";
import { api } from "./AxiosService.js";
import { AppState } from "@/AppState.js";

class FeedService{
  async getAllPosts() {
    const res = await api.get('api/posts')
// const posts = res.data.map(pojo => new posts(pojo)) 
    logger.log(res)
}
}

export const feedService = new FeedService()