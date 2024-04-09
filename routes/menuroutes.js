const express=require('express');
const router=express.Router();

const menuitem=require("./../models/menuitem");

router.post('/',async(req,res)=>{

    try{
      const mdata=req.body
      const newmenuitem=new menuitem(mdata);
      const response=await newmenuitem.save();
  
      console.log('data saved');
      res.status(200).json(response);
    }catch(err){
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  
  
router.get('/',async(req,res)=>{
  
    try{
      const mdata=await menuitem.find();
      console.log('data fetched');
      res.status(200).json(mdata);
    }catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.get('/:taste', async (req, res) => {
    try {
      const taste = req.params.taste; // Extract the work type from the URL parameter
  
      if (taste === 'sweet' || taste === 'sour' || taste === 'spicy') {
        const response = await menuitem.find({ taste: taste });
        console.log('response fetched');
        res.status(200).json(response);
      } else {
        res.status(404).json({ error: 'Invalid work type' });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.put('/:id', async (req, res) => {
    try {
      const menuitemid = req.params.id; // Extract the id from the URL parameter
      const updatedmenudata = req.body; // Updated data for the person
  
      const response = await menuitem.findByIdAndUpdate(menuitemid, updatedmenudata, {
        new: true, // Return the updated document
        runValidators: true, // Run Mongoose validation
      });
  
      if (!response) {
        return res.status(404).json({ error: 'Person not found' });
      }
  
      console.log('data updated');
      res.status(200).json(response);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
      const menuitemid = req.params.id; // Extract the person's ID from the URL parameter
  
      // Assuming you have a Person model
      const response = await menuitem.findOneAndDelete(menuitemid);

  
      if (!response) {
        return res.status(404).json({ error: 'Person not found' });
      }
      console.log('data deleted');
      res.status(200).json({ message: 'Item deleted successfully' });
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
});



  module.exports=router;

  //comment added for testing purpose after pushing once in github
  