const mongoose=require('mongoose');
const { Schema } = mongoose;
const bcrypt = require('bcrypt');
const SALT_ROUNDS = 6;


const userSchema = new Schema(
  {
    name:String,
    email:{type:String, lowercase: true, unique: true },
    password:{
      type: String,
      select: false,
    },
  },{
    timestamps:true,
  });

  userSchema.set('toJSON', {
    transform: function (doc, ret) {
      // remove the password property when serializing doc to JSON
      delete ret.password;
      return ret;
    },
  });
  
  //pre-mongoose middleware
  userSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password')) return next();
    bcrypt.hash(user.password, SALT_ROUNDS, function (err, hash) {
      if (err) return next(err);
      // replace the user provided password with the hash
      user.password = hash;
      next();
    });
  });
  
  userSchema.methods.comparePassword = function (pw, cb) {
    bcrypt.compare(pw, this.password, cb);
  };
  
  module.exports = mongoose.model('User', userSchema);
  