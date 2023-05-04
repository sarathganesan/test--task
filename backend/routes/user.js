const express=require('express');
const { newUser, getUsers } = require('../controller/userController');


const router=express.Router();


router.route('/new/user').post(newUser)
router.route('/users').get(getUsers)

module.exports=router; 