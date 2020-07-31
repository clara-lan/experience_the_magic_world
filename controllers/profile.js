const Profile = require('../models/Profile');


module.exports={
  createAndUpdate,
  getProfile,
};

//create initial version of user profile
async function createAndUpdate(req, res){
  console.log(req.body);
  await Profile.create(req.body);
  res.json();
}

async function getProfile(req, res,next){
  console.log(req.params);
  try{
    //find all the profile with the same userId
    const profile = await Profile.find({userId:req.params.id});
    console.log(profile);
    res.json(profile);
  }catch(err){
    next(err);
  }
}

