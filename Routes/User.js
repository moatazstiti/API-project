const express =require('express')
const User =require("../model/User")
const router=express.Router()

router.get('/test',(req,res)=>{
    res.send('hello')
})

router.post('/add',async(req,res)=>{
    try{
        const{firstname,name,age,university,email}=req.body;
        const newUser=new User ({firstname,name,age,university,email})
        await newUser.save();
        res.status(200).send({msg:'user added',newUser})

    }catch (error){
        res.status(400).send({msg:'can not add this user'})
    }
})

router.get('/all',async(req,res)=>{
    try{
        const listUsers=await User.find();
        res.status(200).send({msg:'userlist',listUsers})

    }catch(error){
        res.status(400).send({msg:'can not get users'})
    }
})

router.delete('/:_id',async(req,res)=>{
    try{
        const{_id}=req.params;
        await User.findOneAndDelete({_id})
        res.status(200).send({msg:'user deleted'})

    }catch(error){
        res.status(400).send({msg:'can not delete user'})
    }
    
})

router.put('/:_id',async(req,res)=>{
    try{
        const{_id}=req.params;
        const updateUsers= await User.updateOne({_id},{ $set:{...req.body}})
        res.status(200).send({msg:'user updated'})

    }catch(error){
        res.status(400).send({msg:'can not update users'}) }
    
})

router.get('/:id',async(req,res)=>{
    try{
        const Usertoget= await User.findOne({_id:req.params._id})
        res.status(200).send({msg:'user geted',Usertoget})
    }catch(error){
        res.status(400).send({msg:'can not get user'}) }
    
})




module.exports=router;