import { Router } from "express";
import { createPost, deletePost, getAllPosts, getPostsCommentCount } from "./post.service.js";
const router = Router()

router.post('/create', async(req, res, next)=> {
    const result = await createPost(req.body)
    return res.status(201).json({
        Message: "Post Created",
        result
    })
})

router.delete('/:postId', async (req, res, next) => {
    const result = await deletePost(req.params.postId, req.body.userId)
    return res.status(200).json({
        Message: "Post Deleted",
        result
    })
})

router.get('/details', async (req, res, next) => {
    const result = await getAllPosts()
    return res.status(200).json({
        Message: "All posts",
        result
    })
})

router.get('/comment-count', async (req, res, next) => {
    const result = await getPostsCommentCount()
    return res.status(200).json({
        Message: "Commented posts",
        result
    })
})

export default router