const User = require("../models/User");
const Project = require("../models/Project");

exports.getPortfolio =
async(req,res)=>{

try{

const user =
await User.findOne({
username:req.params.username
})
.select("-password");

if(!user){

return res.status(404).json({
message:"User Not Found"
});

}

const projects =
await Project.find({
userId:user._id
});

res.status(200).json({

user,
projects

});

}
catch(error){

res.status(500).json({
message:error.message
});

}

};