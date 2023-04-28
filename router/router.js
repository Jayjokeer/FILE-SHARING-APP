
const express = require('express')
const router = express.Router()
const multer = require('multer')
const filedb = require('../models/filedb')
const bcrypt = require('bcrypt')


const upload = multer({
    dest:"uploads"
})

//homepage
router.get('/',(req,res)=>{
    res.render('index')
})

//function that handles file upload
const fileController = async(req,res)=>{
    const fileData = {
        originalName:req.file.originalname,
        path: req.file.path,

    }

    if(req.body.password != null && req.body.password != ""){
        const hashedpwd = await bcrypt.hash(req.body.password,10)
        fileData.password = hashedpwd
    }

   const newFile = await filedb.create(fileData)
   //console.log(newFile)
   
   res.render('index',{fileLink :`${req.headers.origin}/file/${newFile.id}`})
    
}

//function that handles file download
const handleDownload=async(req,res)=>{
    const pId = req.params.id
    const foundFile = await filedb.findById(pId)
    
    if(!(await bcrypt.compare(req.body.password,foundFile.password))){
        res.render('password',{error:true})
        return
    }
    foundFile.downloadcount++
    await foundFile.save()
    
    res.download(foundFile.path,foundFile.originalName,{success:true})
    //console.log(foundFile.downloadcount)
}
//posting the new file
router.post('/upload',upload.single('file'),fileController,async(req,res)=>{
})

//get file download page using id 
router.route('/file/:id')
.get((req,res)=>{
    res.render('password')
})
//download file after inputting password
.post(handleDownload)

module.exports = router