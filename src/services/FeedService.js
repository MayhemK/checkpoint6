import { logger } from "@/utils/Logger.js";
import { api } from "./AxiosService.js";
import { AppState } from "@/AppState.js";
import { Post } from "@/models/Post.js";
import { Account } from "@/models/Account.js";

class FeedService{
  async likePost(postId) {
    const res = await api.post(`api/posts/${postId}/like`)
    await this.getAllPosts()
  }
  async deletePost(postId) {
    const res = await api.delete(`api/posts/${postId}`)
    const posts = AppState.posts
    const postIndex = posts.findIndex(post => post.id == postId)
    posts.splice(postIndex, 1)
  }
  async getAllPosts() {
    const res = await api.get('api/posts')
const posts = res.data.posts.map(pojo => new Post(pojo)) 
const likes = res.data.posts
AppState.posts = posts
}

}

export const feedService = new FeedService()