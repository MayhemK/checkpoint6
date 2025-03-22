import { logger } from "@/utils/Logger.js";
import { api } from "./AxiosService.js";
import { AppState } from "@/AppState.js";
import { Post } from "@/models/Post.js";

class FeedService{
  async getAllPosts() {
    const res = await api.get('api/posts')
const posts = res.data.posts.map(pojo => new Post(pojo)) 
AppState.posts = posts
logger.log('creator', posts)
logger.log('got api posts with data', res)
}
}

export const feedService = new FeedService()