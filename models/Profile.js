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
    mp:{type:Number, default:5},
    userId:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
  });

  module.exports=mongoose.model('Profile', profileSchema);