const Profile = require('../models/Profile');


module.exports={
  createAndUpdate,
  getProfile,
};

//create initial version of user profile
async function createAndUpdate(req, res){
  conslo.log(user);
}

async function getProfile(req, res,next){
  try{
    const profile = await Profile.findById({_id:req.body.id});
    res.redirect(`/${props.user.id}/profile`)
  }catch(err){
    next(err);
  }
}

