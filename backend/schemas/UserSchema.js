const {Schema} = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new Schema({
    username : {
        type : String,
        required : true,
        unique : true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type : String,
        required : true,
    }
}, 
{timestamps: true}); //can check/track when a user logged in 

//function
//this runs before user saves - presave hook
//creates salt and hashes
UserSchema.pre("save", async function () {
  //if password not modified - keep hashing
  if (!this.isModified("password")) return; //this refers to the current user

  // if modified -
  // A salt is a random string added to a password before hashing it.
  //     bcrypt generates a random salt such  and combines it with the password before creating the hash.

  // The 10 is the cost factor (salt rounds).
  // Higher rounds = more secure but slower.
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt); //hashes the password - only hashed value is visible in database
});

//function -  match password from database
UserSchema.methods.matchPassword = async function (enteredPassword) {
  //internally hashes the eneteredPassword and then compares with the hashed password stored in database
  return await bcrypt.compare(enteredPassword, this.password);
};


module.exports = {UserSchema};