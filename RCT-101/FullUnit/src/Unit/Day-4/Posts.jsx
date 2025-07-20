import { useState, useEffect } from "react"
function Posts() {
    const [posts, setposts] = useState([])
    const [page, setPage] = useState(0);
    const [loading, setLoading] = useState(true);

    const handleClick = (val) => {
        setPage((prev) => prev + val)
    }
    useEffect(() => {
        try {
            console.log(fetchPosts().then((data) => {
                setposts(data);
                setLoading(false)
            }))
        } catch (error) {
            console.log("error in fetching posts...", error)
            setLoading(false)
        }
    }, [page])
    console.log(posts)
    function fetchPosts() {
        return fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}`).then((data) => {
            return data.json();
        }).then((data) => {
            return data;
        })
    }
    return (
        <>
            {
                loading ? (<p>Loading....</p>) : (
                    <>
                        {
                            posts.map((el) => (
                                <div
                                    style={{ maxHeight: "300px", border: "2px solid #DCDCDC", padding: "1px", marginTop: "6px", display: "flex", flexDirection: "column", }}
                                    key={el.id}>
                                    <h6>Post Counts: {el.id}</h6>
                                    <h5>UserId :{el.userId}</h5>
                                    <h3 style={{ color: "#67163aff" }}>Post Title : {el.title}</h3>
                                    <h3 style={{ color: "#67163aff" }}>Post Body: {el.body}</h3>
                                </div>
                            ))
                        }

                        <div style={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "center", position: "fixed", bottom: "0%", backgroundColor: "#000" }}>
                            <button disabled={page == 1} onClick={() => handleClick(-1)}>Prev</button>
                            <button style={{ backgroundColor: "#fff", color: "#000" }} disabled>{page}</button>
                            <button onClick={() => handleClick(1)}>next</button>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default Posts
