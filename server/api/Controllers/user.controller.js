const { user } = require("../Model/schema");
const ApiError = require("../utilities/ApiError");

const getUser = async(req,res)=>{
    const {id} = req.params;
    const getUser = await user.findById(id);
    if(!getUser){
        throw new ApiError('404', 'user not found')
    }

    res.json({
        sucess: true,
        data: getUser,
        message: "user fetched successfully", 
    })
    
}
const deleteUser = async(req,res)=>{
    const {id} = req.params;
    const getUser = await user.deleteOne(id);
    if(!getUser){
        throw new ApiError('404', 'user not found')
    }
    res.json({
        message: true,
        message: "user deleted successfully"
      })
    
}
const editUser = async(req,res)=>{
    const {id} = req.params;
    const data = req.body;
    console.log(data);
  
    const userUpdate = await user.findByIdAndUpdate(id, {
     ...data
    }, {new: true});
    
    if(!userUpdate){
      throw new ApiError(404, "user not updated!!")
    } 
  
    res.json({
      message: true,
      data: userUpdate,
      message: "user updated successfully"
    })
  
  }

module.exports = {getUser, deleteUser, editUser, deleteUser};