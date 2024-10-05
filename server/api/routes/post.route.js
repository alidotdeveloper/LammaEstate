const express = require("express");
const post= require("../Controllers/post.controller");
const JwtVerify = require("../Middleware/jwt-verify");
const upload = require("../Middleware/multer");
const router = express.Router();

router.post('/add', upload.single('postImage'), post.addPost);
router.get('/get',  post.getPost);
router.get('/:id',   post.getPostById);
router.delete('/:id',  post.deletePost);
router.put('/update/:id',  post.updatePost);




module.exports = router;
