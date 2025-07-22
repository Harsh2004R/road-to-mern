import React, { useState, useEffect } from 'react'
import { useParams } from "react-router";

function CommentDetails() {
  const [cmt, setCmt] = useState({});
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);
  const { id } = useParams()
  const getComments = () => {
    return fetch(`https://jsonplaceholder.typicode.com/comments/${id}`).then((res) => res.json())
  }
  useEffect(() => {
    try {
      getComments().then((data) => {
        setCmt(data);
      })
    } catch (error) {
      setErr(error)
    } finally {
      setLoading(false)
    }
  }, [])
  console.log(cmt);




  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading....</p>
  }
  if (err) {
    return <p style={{ color: "red" }}>[err]</p>
  }
  return (
    <>
      <h1>
        Full details of :-{cmt.name}
      </h1>

      <div key={cmt.id} style={{ border: "2px solid #666666", padding: "5px" }}>
        <h4>Name: {cmt.name}</h4>
        <p>
          ID: {cmt.id}
        </p>
        <h5 style={{ color: "#88b45dff" }}>
          Email: {cmt.email}
        </h5>
        <h4 style={{ color: "red" }}>
          {cmt.body}
        </h4>
      </div>
    </>
  )
}

export default CommentDetails
