export class Banner {
  /**
   * @param {{ title: any; linkUrl: any; tall: any; square: any; banner: any; }} data
   */
  constructor(data) {
    this.title = data.title
    this.linkUrl = data.linkUrl
    this.tall = data.tall
    this.square = data.square
    this.banner = data.banner
  }
}