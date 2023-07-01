import {postAPI} from '../../services/PostService'
import PostItem from './PostItem/PostItem'
import {IPost} from '../../models/IPost'

const Post = () => {
  const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(100)
  const [createPost, {error: createError, isLoading: createIsLoading}] = postAPI.useCreatePostMutation()
  const [updatePost, {}] = postAPI.useUpdatePostMutation()
  const [deletePost, {}] = postAPI.useDeletePostMutation()

  const addPostClick = async () => {
    const title = prompt()
    await createPost({title, body: title} as IPost)
  }

  const updatePostHandle = (post: IPost) => {
    updatePost(post)
  }

  const deletePostHandle = (post: IPost) => {
    deletePost(post)
  }

  return (
    <>
      <h1>Posts</h1>
      <button onClick={addPostClick}>Add new post</button>
      {isLoading && <h1>Идёт загрузка...</h1>}
      {error && <h1>Произошла ошибка при загрузке Posts</h1>}
      {createIsLoading && <h1>Идёт загрузка new Post...</h1>}
      {createError && <h1>Произошла ошибка при загрузке нового поста</h1>}
      {posts && posts.map(post =>
        <PostItem remove={deletePostHandle} update={updatePostHandle} post={post} key={post.id}/>
      )}
    </>
  )
}

export default Post