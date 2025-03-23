import { logger } from "@/utils/Logger.js";
import { api } from "./AxiosService.js";
import { AppState } from "@/AppState.js";
import { Post } from "@/models/Post.js";
import { Account } from "@/models/Account.js";

class FeedService{
  async getAllPosts() {
    const res = await api.get('api/posts')
const posts = res.data.posts.map(pojo => new Post(pojo)) 
const likes = res.data.posts
AppState.posts = posts
logger.log('post info',likes)
// logger.log('creator', posts)
}
// async getLikes() {
//   const res = await api.get('api/posts')
//   const likes = res.data.posts.map(pojo => new Post(pojo))
//   logger.log('POST INFO', res.data)
//   AppState.likes = likes
// }
}

export const feedService = new FeedService()