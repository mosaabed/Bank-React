const express = require('express')
const router = express.Router() 

const Trans  = require('../models/Trans')

router.get('/Trans' , function(req , res){
    Trans.find({}, function (err, TransData){
        if (err) {
           console.log("neakat")
          }
        res.send(TransData)
    })
})



router.post('/addTrans' , function(req , res){
    let Transdata = req.body
    console.log(Transdata)
    let newTrans = new Trans(Transdata)
    newTrans.save()
    res.send(Transdata)
    res.end()
})

router.delete('/deleteTrans/:id' , function(req , res){
    let id = req.params.id
    console.log(id)
    Trans.findOneAndRemove({_id :id} , function(err , elem){
        console.log(elem)
        if (err) {
            console.log("neakat")
           }
    })
    res.end()
})



module.exports = router