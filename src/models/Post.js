export class Post {
  /**
   * @param {{ body: any; imgUrl: any; creatorId: any; likeIds: any; id: any; creator: any; picture: any; createdAt: any; likes: any }} data
   */
  constructor(data){
    this.body = data.body
    this.imgUrl = data.imgUrl
    this.creatorId = data.creatorId
    this.likeIds = data.likeIds
    this.id = data.id
    this.creator = data.creator.name
    this.picture = data.creator.picture
    this.createdAt = data.createdAt
    this.likes = data.likes
  }
}