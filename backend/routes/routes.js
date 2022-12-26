const List = require('../model/todoModel')
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    try{
        const list = await new List(req.body).save();
        res.send(list);
    }catch(err){
        res.send(err)
    }
})

router.get("/", async (req, res) => {
    try{
        const list = await list.find();
        res.send(list);
    }catch(err){
        res.send(err)
    }
})

router.put('/:id', async (req, res) => {
    try{
        const list = await list.findOneAndUpdate(
            {_id: req.params.id},
            req.body
        )
        res.send(list)
    }catch(err){
        res.send(err)

    }
})

router.delete("/:id", async (req, res) => {
    try {
        const list = await list.findOneAndDelete(req.params.id);
        res.send(list)
    } catch (err) {
        res.send(err)
        
    }
})

module.exports = router;