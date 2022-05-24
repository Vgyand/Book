import User from "../../models/userModel.js"
import asyncHandler from 'express-async-handler'
import { generateToken } from "../../helpers/generateToken.js"

// @desc Register user
// @route POST /api/users
// @access Public

export const registerUser = asyncHandler(async (req, res) => {
    const { userName, email, password } = req.body

    const isHaveEmail = await User.findOne({ email })
    const isHaveUserName = await User.findOne({ userName })
    if (isHaveEmail) {
        res.status(400)
        throw new Error('Email is already taken')
    }
    if (isHaveUserName) {
        res.status(400)
        throw new Error('Username is already taken')
    }

    const user = await User.create({
        userName, email, password
    })

    const token = generateToken(user._id)

    res.json({ user, token })
})