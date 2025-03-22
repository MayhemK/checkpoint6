import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"

class ProfileService {
  async getProfileById(profileId) {
    const res = await api.get(`api/profiles/${profileId}`)
    logger.log(res.data)
  }
}

export const profileService = new ProfileService()