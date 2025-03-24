import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { Account } from "@/models/Account.js"
import { Pop } from "@/utils/Pop.js"
import { Post } from "@/models/Post.js"
import { feedService } from "./FeedService.js"

class ProfileService {
  async likePost(postId) {
    const res = await api.post(`api/posts/${postId}/like`)
    await this.getPostsById()
  }
  async getProfileById(profileId) {
    AppState.activeProfile = null
    try {
      const res = await api.get(`api/profiles/${profileId}`)
    const profileData = new Account(res.data)
    AppState.activeProfile = profileData
    return profileData
    }
    catch (error){
      Pop.error(error);
    }
  }
  async getPostsById(creatorId) {
    const res = await api.get(`api/posts?creatorId=${creatorId}`)
    const posts = res.data.posts.map(pojo => new Post(pojo))
    AppState.userPosts = posts
    return posts
  }
}

export const profileService = new ProfileService()