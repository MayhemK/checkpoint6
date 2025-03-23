import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { Account } from "@/models/Account.js"
import { Pop } from "@/utils/Pop.js"

class ProfileService {
  async getProfileById(profileId) {
    try {
      const res = await api.get(`api/profiles/${profileId}`)
    const profileData = new Account(res.data)
    AppState.activeProfile = profileData
    logger.log('profile by id' , profileData)
    return profileData
    }
    catch (error){
      Pop.error(error);
    }
  }
}

export const profileService = new ProfileService()