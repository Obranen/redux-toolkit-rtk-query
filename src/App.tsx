import React, {useEffect} from 'react'
import './App.css'
import {useDispatchHook, useSelectorHook} from './hook/redux'
import {fetchUsers} from './store/reducers/ActionCreators'
import Post from './components/Post/Post'

function App() {
  const dispatch = useDispatchHook()
  const {users, isLoading, error} = useSelectorHook(state => state.userReducer)

  useEffect(() => {
    dispatch(fetchUsers())
  }, []) // eslint-disable-line

  return (
    <>
      <h1>Users</h1>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {JSON.stringify(users, null, 2)}
      <Post/>
    </>
  );
}

export default App;
