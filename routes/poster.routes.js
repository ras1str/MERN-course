const {Router}= require('express')
const Poster = require('../models/Poster')
const router = Router()

router.post(
    '/poster',
    async(req,res) =>{

        try {
            
            const { title, comment} = req.body 

            const poster = new Poster({ title, comment})

            await poster.save()

            return res.status(201).json({msg:'Объявление создано'})


        } catch (e) {
            
            return res.status(500).json({msg: 'Статус 500'})

        }







    })

router.get('/allposter',
    async(req,res)=>{

        try {
            const allPoster = await Poster.find().toArray()
   
            res.json(allPoster) 
            return res.status(200).json({msg:'Данные отправлены'}) 
          

           


        } catch (e) {
            
            return res.status(500).json({msg: 'Статус 500'})

        }

    })

router.get('/:id', async(req,res)=>{

    try {
            const poster = await Poster.findById(req.params.id)
            res.json(poster)


    } catch (e) {
        
        return res.status(500).json({msg: 'Статус 500'})

    }

})

    
   



module.exports = router 