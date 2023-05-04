const Fields = require('../models/userModel');
const catchAsyncError = require('../middlewares/catchAsyncError')
exports.newUser = catchAsyncError(async (req, res, next) => {

    const { mobile } = req.body;
    const { idtype } = req.body;
    const { govtid } = req.body;
    const { emergencycontactnumber } = req.body;

    if (typeof mobile === 'string') {
        throw new Error('Mobile number must be a number');
    }

    if (mobile && mobile.toString().length !== 10) {
        throw new Error('Mobile number must be 10 digits');
    }

    if (typeof emergencycontactnumber === 'string') {
        throw new Error('Emergency Contact number must be a number');
    }

    if (emergencycontactnumber && emergencycontactnumber.toString().length !== 10) {
        throw new Error('Emergency Contact number must be 10 digits');
    }

    if (idtype === 'Adhar' && (!govtid || govtid.toString().length !== 12 || isNaN(govtid))) {
        throw new Error('Govt Id must be a valid 12-digit numeric string for Adhar idtype');
    }

    if (idtype === 'PAN' && (!govtid || govtid.toString().length !== 10 )) {
        throw new Error('Govt Id must be a valid 10-digit alpha-numeric string for PAN idtype');
    }


  

    const user = await Fields.create(req.body)
    res.status(201).json({
        success: true,
        user
    });
});



exports.getUsers = catchAsyncError(async (req, res, next)=>{
    
    const users = await Fields.find();

    res.status(200).json({
        success : true,
        users
    })
})