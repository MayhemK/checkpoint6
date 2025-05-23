import { logger } from "@/utils/Logger.js";
import { api } from "./AxiosService.js";
import { AppState } from "@/AppState.js";
import { Post } from "@/models/Post.js";
import { Account } from "@/models/Account.js";

class FeedService{
  async getOlder(page) {
    const res = await api.get(`api/posts?page=${page}`)
    logger.log('response of Older', res)
    const posts = res.data.posts.map(pojo => new Post(pojo))
    AppState.posts = posts
  }
  async getNewer(page) {
    const res = await api.get(`api/posts?page=${page}`)
    logger.log('response of Newer', res)
    const posts = res.data.posts.map(pojo => new Post(pojo))
    AppState.posts = posts
  }
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
AppState.posts = posts
}

// async changePageInProfile(profileId, pageNumber) {
//   const response = await api.get(api/profiles/${profileId}/posts?page=${pageNumber})
//   logger.log(Changing page from ${profileId}and${pageNumber}, response.data)
//   const posts = response.data.posts.map(pojo => new Post(pojo))
//   AppState.posts = posts
//   AppState.currentPage = response.data.page  1
//   AppState.totalPages = response.data.totalPages  1
// }


}

export const feedService = new FeedService()