const Project = require("../models/Project");

exports.addProject = async(req,res)=>{

try{

const {
title,
description,
techStack,
githubLink,
liveLink
}
=
req.body;

const project =
await Project.create({

userId:req.user.id,

title,
description,
techStack,
githubLink,
liveLink

});

res.status(201).json(project);

}
catch(error){

res.status(500).json({
message:error.message
});

}

};

exports.getProjects = async(req,res)=>{

try{

const projects =
await Project.find({
userId:req.user.id
});

res.status(200).json(projects);

}
catch(error){

res.status(500).json({
message:error.message
});

}

};

exports.updateProject = async(req,res)=>{

try{

const project =
await Project.findById(req.params.id);

if(!project){

return res.status(404).json({
message:"Project Not Found"
});

}

const updatedProject =
await Project.findByIdAndUpdate(

req.params.id,

req.body,

{
new:true
}

);

res.status(200).json(updatedProject);

}
catch(error){

res.status(500).json({
message:error.message
});

}

};

exports.deleteProject = async(req,res)=>{

try{

const project =
await Project.findById(req.params.id);

if(!project){

return res.status(404).json({
message:"Project Not Found"
});

}

await Project.findByIdAndDelete(
req.params.id
);

res.status(200).json({
message:"Project Deleted"
});

}
catch(error){

res.status(500).json({
message:error.message
});

}

};