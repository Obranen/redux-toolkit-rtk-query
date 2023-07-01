import React, {FC} from 'react'
import {IPost} from '../../../models/IPost'

interface IPostItem {
  post: IPost
  remove: (post: IPost) => void
  update: (post: IPost) => void
}

const PostItem: FC<IPostItem> = ({post, remove, update}) => {

  const updatePostClick = (e: React.MouseEvent) => {
    const title = prompt() || ''
    update({...post, title})
  }

  const deletePostClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    remove(post)
  }

  return (
    <>
      <p>{post.id}</p>
      <p>{post.title}</p>
      <button onClick={updatePostClick}>Update</button>
      <button onClick={deletePostClick}>Delete</button>
    </>
  )
}

export default PostItem