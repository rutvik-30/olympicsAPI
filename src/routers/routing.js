
const express=require("express");
const router=new express.Router(); 

const OLYMPICSMODEL=require("../models/olympic");

router.post("/",async(req,res)=>{
    try{
    const PostData = new OLYMPICSMODEL(req.body);
    console.log(PostData);
const Createuser=await PostData.save();
res.status(200).send(Createuser);
    }catch(e){
res.status(404).send(e);
    }
});


router.get("/",async(req,res)=>{
try{
    const getData=await OLYMPICSMODEL.find();
    res.status(200).send(getData);

}
catch(e){
    res.status(404).send(e);

}
})

router.get("/:id",async(req,res)=>{
    try{
        const _id = req.params.id;
        const getData=await OLYMPICSMODEL.findById(_id);
        if(!_id){
            res.status(404).send("Invalid id");
        }
        else{
            res.status(200).send(getData);
    }
        }
    catch(e){
        res.status(404).send(e);
    }
    })


    router.delete("/:id",async(req,res)=>{
        try{
        const _id=req.params.id;
        const deleteData=await OLYMPICSMODEL.findByIdAndDelete(_id);
        res.status(200).send(deleteData);
        }catch(e){
            res.status(404).send(e);
        }
    })

    router.patch("/:id",async(req,res)=>{
        try{
        const _id=req.params.id;
        const UpdateData= await OLYMPICSMODEL.findByIdAndUpdate(_id,req.body,{new:true});
        res.status(200).send(UpdateData);
        }
        catch(e){
            res.status(404).send(e);
        }
    })
module.exports=router;