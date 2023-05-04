const mongoose = require('mongoose');
const validator = require('validator');

const SignupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    required: true,
  },
  dateofbirthorage: {
    type: String,
    required: true,
  },
  idtype: {
    type: String,
  },
  govtid: {
    type: String,
  },
  guardianname: {
    type: String,
  },
  guardianlabel: {
    type: String,
  },
  email: {
    type: String,
   
    required: false, 
  },
  emergencycontactnumber: {
    type: Number,
    validate: {
      validator: Number.isInteger,
      message: '{VALUE} is not an integer value',
    },
  },
  mobile: {
    type: Number,
    validate: {
      validator: Number.isInteger,
      message: '{VALUE} is not an integer value',
    },
  },
  state: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  country: {
    type: String,
  },
  pincode: {
    type: String,
  },
  occupation: {
    type: String,
  },
  maritalstatus: {
    type: String,
  },
  religion: {
    type: String,
  },
  nationality: {
    type: String,
  },
  bloodgroup: {
    type: String,
  },
});

const Signup = mongoose.model('User', SignupSchema);

module.exports = Signup;
