export class Account {
  /**
   * @typedef AccountData
   * @property {string} id
   * @property {string} email
   * @property {string} name
   * @property {string} picture
   * @property {string} coverImg
   * @property {string} bio
   * @property {string} resume
   * @property {boolean} graduated
   * @property {string} github
   * @property {string} linkedin
   * @property {string} class
   * 
   * @param {AccountData} data
   */
  constructor(data) {
    this.id = data.id
    this.email = data.email
    this.name = data.name
    this.picture = data.picture
    this.coverImg = data.coverImg
    this.bio = data.bio
    this.graduated = data.graduated
    this.resume = data.resume
    this.github = data.github
    this.linkedin = data.linkedin
    this.class = data.class
  }
}
