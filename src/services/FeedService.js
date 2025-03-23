import { logger } from "@/utils/Logger.js";
import { api } from "./AxiosService.js";
import { AppState } from "@/AppState.js";
import { Post } from "@/models/Post.js";
import { Account } from "@/models/Account.js";

class FeedService{
  async getAllPosts() {
    const res = await api.get('api/posts')
const posts = res.data.posts.map(pojo => new Post(pojo)) 
AppState.posts = posts
// logger.log('creator', posts)
}
async getProfileById(profileId) {
  const res = await api.get(`api/profiles/${profileId}`)
  AppState.activeProfile = new Account(res.data)
  logger.log('profile by id' , res.data)
}
}

export const feedService = new FeedService()