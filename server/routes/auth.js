const express=require('express');
const app=express();
const router=express.Router();

router.post('/register',async(req,res)=>{
    console.log('Inside backend register part');
    res.json({"successful":true})
})

module.exports=router
