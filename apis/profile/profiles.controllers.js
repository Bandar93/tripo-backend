const Profile = require("../../db/model/Profile");

exports.profileUpdate = async (req, res, next) => {
      const { profileId } = req.params;
      try {
      const foundProfile = await Profile.findById(profileId);
      if ( foundProfile.user.equals(req.user._id)){
      if (req.file) req.body.image = `/${req.file.path}`;
      await  foundProfile.updateOne(req.body, { new: true })
      return res.json(foundProfile);
    }else{
      return res.status(401).json({massage: "Unthroized"})
    }
    } catch (error) {
      next(error);
    }
  }

  exports.findProfile = async (profileId, next) => {
    try {
      const foundProfile = await Profile.findById(profileId);
      return foundProfile;
    } catch (error) {
      next(error);
    }
  };
  
  
  exports.fetchProfile = async (req, res, next) => {
    try {
      const profiles = await Profile.find().populate({
        path: "user",
        select: "username",
      });
      return res.status(200).json(profiles);
    } catch (error) {
      console.log(error);
    }
  };


  // exports.productUpdate = async (req, res, next) => {
  //   try {
  //     req.body.image = `${req.protocol}://${req.get("host")}/${req.file.path}`;
  //     const product = await Product.findByIdAndUpdate(
  //       req.product,
  //       req.body,
  //       { new: true, runValidators: true } // returns the updated product
  //     );
  //     return res.status(200).json(product);
  //   } catch (error) {
  //     next(error);
  //   }
  // };


  // const { productId } = req.params;
  // try {   const foundProduct = await Product.findById(productId); 
  //   if (foundProduct) {     const foundProduct = await Product.findById(productId);     
  // await foundProduct.updateOne(req.body, { new: true });    
  //  return res.json(foundProduct);   
  // } else {  
  //    return res.status(404).json({ message: "Product not found" });   } } 
  