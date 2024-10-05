const uploadImageToCloudinary = require("../Middleware/cloudinary");
const { post, user } = require("../Model/schema");
const { ApiError } = require("../utilities/ApiError");

const addPost = async (req, res, next) => {
  try {
    const data = req.body;
    const file = req.file;
    console.log(data)
    console.log("here is file", file);

    if (!data || !file) {
      throw new ApiError(404, "data not found");
    }
    if(file){
      const imageURL = await uploadImageToCloudinary(file.path);
      console.log(imageURL)
    
    const addPost = await post.create({
      ...data,
      image: imageURL
    });
  
    if (!addPost) {
      throw new ApiError(404, "post created failed");
    }
  
    res.json({
      sucess: true,
      data: addPost,
      message: "created successfully",
    });
  
  }} catch (error) {
    next(error);
  }
};

const getPost = async (req, res, next) => {
  try {
    const getPost = await post.find();

    if (!getPost) {
      throw new ApiError(400, "post not found");
    }

    res.json({
      sucess: true,
      posts: getPost,
      message: "created successfully",
    });
  } catch (error) {
    next(error);
  }
};
const getPostById = async (req, res, next) => {
    try {
        const {id} = req.params;
      const getPost = await post.find(id);
  
      if (!getPost) {
        throw new ApiError(400, "post not found");
      }
  
      res.json({
        sucess: true,
        data: getPost,
        message: "created successfully",
      });
    } catch (error) {
      next(error);
    }
  };
const deletePost = async (req, res, next) => {
  try {
    
    const { id } = req.params;
   
    if(id){
    const deletePost = await post.findByIdAndDelete(id);
    if (!deletePost) {
      throw new ApiError(404, "post not dleeted successfully");
    }
    res.json({
      success: true,
      data: deletePost,
      message: "deleted successfully",
    });
  }
  } catch (error) {
    next(error);
  }
};

const updatePost = async (req, res, next) => {
  const { id } = req.params;
  const data = req.body;

  const postExist = await post.findById(id);

  if (!postExist) {
    throw new ApiError("404", "post not exist");
  }

  Object.assign(postExist, { ...data });
  const updatedPost = await postExist.save();

  if (updatedPost) {
    res.json({
      sucess: true,
      data: updatedPost,
      message: "updated successfully",
    });
  }
};

module.exports = { addPost, getPost, deletePost, updatePost, getPostById };
