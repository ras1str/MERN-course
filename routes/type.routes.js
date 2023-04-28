const {Router}= require('express')
const Type = require('../models/Type')
const router = Router()

router.post(
    '/typecreate', 
    async(req, res)=>{
        try {

            const {name} = req.body
            const type = await Type.create({name})
            return res.json(type)
        
        
            

        } catch (e) {

            return res.status(500).json({msg:'Статус 500'})

        }



})

    router.get(
        '/typeget',
        async(req, res)=>{

            try {

                const types = await Type.find().toArray()
                res.json(types)

            } catch (e) {

                res.status(500).json({msg:"Статус 500"})
                
            }




    })

module.exports = router 
