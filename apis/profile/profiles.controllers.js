const Profile = require("../../db/model/Profile");

exports.ProfileUpdate = async (req, res, next) => {
      const {profileId} = req.params;
      try {  
      if (req.file) req.body.image = `/${req.file.path}`;
      await Profile.findById(req._id)
      (req.body);
      res.status(204).end();
    
    } catch (error) {
      next(error);
    }
  }



  // const { productId } = req.params;
  // try {   const foundProduct = await Product.findById(productId); 
  //   if (foundProduct) {     const foundProduct = await Product.findById(productId);     
  // await foundProduct.updateOne(req.body, { new: true });    
  //  return res.json(foundProduct);   
  // } else {  
  //    return res.status(404).json({ message: "Product not found" });   } } 
  