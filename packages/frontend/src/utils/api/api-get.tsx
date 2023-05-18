import axios from 'axios'
import React from 'react'

const myApi = 'http://localhost:3333/api'

export default function TravelsApi() {
  const [post, setPost] = React.useState(null)

  React.useEffect(() => {
    axios.get(`${myApi}/travels`).then((response) => {
      setPost(response.data)
    })
  }, [])
  // IMPORTANTE DE VER: REACTQUERY

  const postTravel = () => {
    axios
      .post(`${myApi}/travels`, {
        body: 'This is my first post!',
        title: 'Hello World!',
        userId: 1,
      })
      .then((response) => {
        setPost(response.data)
      })
  }

  const updateTravel = () => {
    axios
      .put(`${myApi}/travels/1`, {
        body: 'This is my first post!',
        title: 'Hello World!',
        userId: 1,
      })
      .then((response) => {
        setPost(response.data)
      })
  }

  const deleteTravel = () => {
    axios.delete(`${myApi}/travels/1`).then((response) => {
      setPost(response.data)
    })
  }

  if (!post) return null

  return (
    <div>
      <button onClick={postTravel}>Create Post</button>
      <button onClick={updateTravel}>Update Post</button>
      <button onClick={deleteTravel}>Delte Post</button>
    </div>
  )
}
