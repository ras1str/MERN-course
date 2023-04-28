const {Router}= require('express')
const Kindsales= require('../models/Kindsales')
const router = Router()

router.post(
    '/kindsalescreate', 
    async(req, res)=>{
        try {

            const {name} = req.body
            const kindsales = await Kindsales.create({name})
            return res.json(kindsales)
        
        
            

        } catch (e) {

            return res.status(500).json({msg:'Статус 500'})

        }



})

    router.get(
        '/kindsalesget',
        async(req, res)=>{

            try {

                const kindsales = await Kindsales.find().toArray()
                res.json(kindsales)

            } catch (e) {

                res.status(500).json({msg:"Статус 500"})
                
            }




    })

module.exports = router 
