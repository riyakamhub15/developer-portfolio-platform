const User = require("../models/User");

exports.getProfile = async(req,res)=>{

try{

    const user =
    await User.findById(req.user.id)
    .select("-password");

    res.status(200).json(user);

}
catch(error){

    res.status(500).json({
        message:error.message
    });

}

};

exports.updateProfile = async(req,res)=>{

try{

const {
bio,
skills,
github,
linkedin,
profilePic
}
=
req.body;

const updatedUser =
await User.findByIdAndUpdate(

req.user.id,

{
bio,
skills,
github,
linkedin,
profilePic
},

{
new:true
}

).select("-password");

res.status(200).json(updatedUser);

}
catch(error){

res.status(500).json({
message:error.message
});

}

};

exports.updateProfileImage = async (req, res) => {

    try {

        const user = await User.findByIdAndUpdate(

            req.user.id,

            {

                profilePic: req.file.path

            },

            {

                new: true

            }

        ).select("-password");

        res.status(200).json(user);

    }

    catch (error) {

        res.status(500).json({

            message: error.message

        });

    }

};