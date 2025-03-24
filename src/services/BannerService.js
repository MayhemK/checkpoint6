import { AppState } from "@/AppState.js"
import { Banner } from "@/models/Banner.js"
import { api } from "./AxiosService.js"
import { logger } from "@/utils/Logger.js"

class BannerService{
  async getBanner() {
    const res = await api.get('api/ads')
    const banners = res.data.map(pojo => new Banner(pojo))
    AppState.banner = banners
    logger.log('banner', banners)
  }


}

export const bannerService = new BannerService