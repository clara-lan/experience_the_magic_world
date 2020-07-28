const mongoose=require('mongoose');
const { Schema } = mongoose;

const profileSchema = new Schema(
  {
    name:String,
    school:String,
    house:String,
    address:String,
    wand:String,
    bloodStatus:String,
    group:String,
    species:String,
    role:String,
    graduationYear:String,
    pet:String,
  });

  module.exports=mongoose.model('Profile', profileSchema);