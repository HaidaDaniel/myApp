export interface IComment {
  _id: string
  product: number
  author: string
  text: string
  rating: number
  createdAt: string
  __v: number
}
export interface ICommentSend {
  text: string
  rating: number
}
