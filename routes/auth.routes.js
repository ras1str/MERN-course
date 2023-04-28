const { Router } = require('express')
const bcrypt = require('bcrypt')
const config = require('config')
const jwt = require('jsonwebtoken')
const { check, validationResult } = require('express-validator')
const User = require('../models/User')
const router = Router()


router.post(
    '/register',
    [

        check('email', 'Некорректынй email').isEmail(),
        check('pass', 'Некоректный пароль')
            .isLength({ min: 6 })
    ],

    async (req, res) => {

        try {


            const errors = validationResult(req)

            if (!errors.isEmpty()) {

                return res.status(400).json({
                    errors: errors.array(),
                    msg: 'Некорректные данные, попробуйте снова!'
                })

            }

            const { email, pass } = req.body

            const candidat = await User.findOne({ email })

            if (candidat) {
                return res.status(400).json({ msg: 'Такой пользователь уже создан ' })
            }

            const hashedPass = await bcrypt.hash(pass, 12)
            const user = new User({ email, pass: hashedPass })

            await user.save()

            res.status(201).json({ msg: "Пользователь создан" })




        } catch (e) {
            res.status(500).json({ msg: "Статус 500" })


        }

    })
router.post(
    '/login',
    [

        check('email', 'введите корректный email ').normalizeEmail().isEmail(),
        check('pass', 'Введите пароль').exists()

    ],
    async (req, res) => {

        try {
            const errors = validationResult(req)

            if (!errors.isEmpty()) {

                return res.status(400).json({
                    errors: errors.array(),
                    message: 'некорректные данные при входе '
                })

            }

            const { email, pass } = req.body

            const user = await User.findOne({ email })
            if (!user) {
                return res.status(400).json({ msg: 'Пользователь не найден' })
            }

            const isMatch = await bcrypt.compare(pass, user.pass)

            if (!isMatch) {

                return res.status(400).json({ msg: "неверный пароль" })

            }
            const token = jwt.sign(
                { userId: user.id },
                config.get('JWTsecret'),
                { expiresIn: '1h' }
            )
            res.json({ token, userId: user.id })



        } catch (e) {
            return res.status(500).json({ msg: "Статус 500" })
        }


    })


module.exports = router 