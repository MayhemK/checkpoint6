export class Post {
  /**
   * @param {{ body: any; imgUrl: any; creatorId: any; likeIds: any; id: any; }} data
   */
  constructor(data){
    this.body = data.body
    this.imgUrl = data.imgUrl
    this.creatorId = data.creatorId
    this.likeIds = data.likeIds
    this.id = data.id
  }
}