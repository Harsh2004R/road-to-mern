import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './Home'
import UsersNav from './UsersNav'
import Comments from './Comments'
import CommentDetails from "./CommentDetails"
function DayNine() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nav" element={<UsersNav />} />
            <Route path="/comment" element={<Comments />} />
            <Route path="comment/:id" element={<CommentDetails />} />
            {/* <Route path="*" element={<NoPage />} /> */}

        </Routes>
    )
}

export default DayNine
