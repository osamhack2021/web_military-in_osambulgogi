import { Article, Comment, Vote } from '@prisma/client'

export interface VoteCountedArticle extends Article {
  comment?: Comment[]
  vote?: {
    is_upvote: boolean
    user_id?: number
  }[]
  upvote?: number
  downvote?: number
  my_vote?: number
}
