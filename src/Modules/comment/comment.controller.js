import {Router} from 'express'
import { allComments, updateComment } from './comment.service.js'
const router = Router()

router.post('/', async (req, res, next) => {
    const result = await allComments(req.body)
    return res.status(201).json({
        Message: 'Done Creating Messages',
        result
    })
})

router.patch('/:commentId', async (req, res, next) => {
    const result = await updateComment(req.body, req.params.commentId)
    return res.status(200).json({
        Message: "Update Done",
        result
    })
})

export default router