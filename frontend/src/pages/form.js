import React from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { createNewuser } from "../redux/Actions/userActions";
import { clearError, clearProductCreated } from "../redux/Slices/userSlice";
import { useState, useEffect } from 'react';
import { toast } from "react-toastify";
import "./form.css";

const SignupSchema = yup.object().shape({
    name: yup.string().required(),
    sex: yup.string().required(),
    dateofbirthorage: yup.string().required("date of birth or age is required"),

    idtype: yup.string(),
    govtid: yup.string(),
    guardianname: yup.string(),
    guardianlabel: yup.string(),
    email: yup.string(),
    emergencycontactnumber: yup.number().positive().integer(),
    mobile: yup.number().positive().integer(),
    state: yup.string(),
    address: yup.string(),
    city: yup.string(),
    country: yup.string(),
    pincode: yup.string(),
    occupation: yup.string(),
    maritalstatus: yup.string(),
    religion: yup.string(),
    nationality: yup.string(),
    bloodgroup: yup.string(),
});

const sexOptions = [
    { value: "", label: "Select sex" },
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
];

const idtypeoptions = [
    { value: "", label: "Select ID Type" },
    { value: "Adhar", label: "Adhar" },
    { value: "PAN", label: "PAN" },

];

const guardianLabelOptions = [
    { value: "", label: "Enter Label" },
    { value: "Father", label: "Father" },
    { value: "Mother", label: "Mother" },
    { value: "GrandFather", label: "GrandFather" },
    { value: "GrandMother", label: "GrandMother" },
    { value: "Uncle", label: "Uncle" },
    { value: "Aunt", label: "Aunt" },
];


const religionOptions = [
    { label: "Select Religion", value: "" },
    { label: "Christianity", value: "Christianity" },
    { label: "Islam", value: "Islam" },
    { label: "Buddhism", value: "Buddhism" },
    { label: "Hinduism", value: "Hinduism" },
];

const maritalStatusOptions = [
    { label: "Select Marital Status", value: "" },
    { label: "Single", value: "Single" },
    { label: "Married", value: "Married" },
    { label: "Divorced", value: "Divorced" },
    { label: "Widowed", value: "Widowed" },
];

const bloodGroupOptions = [
    { label: "Select Blood Group", value: "" },
    { label: "A+", value: "A+" },
    { label: "B+", value: "B+" },
    { label: "AB+", value: "AB+" },
    { label: "O+", value: "O+" },
    { label: "A-", value: "A-" },
    { label: "B-", value: "B-" },
    { label: "AB-", value: "AB-" },
    { label: "O-", value: "O-" },
];

function Form() {

    const { loading, isProductCreated, error } = useSelector(state => state.userState)

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        console.log(data); 
        dispatch(createNewuser(data));
    };




    useEffect(() => {
        if (isProductCreated) {
          toast('Product Created Succesfully!', {
            type: 'success',
            position: toast.POSITION.BOTTOM_CENTER,
            onOpen: () => dispatch(clearProductCreated())
          })
          navigate('/userlist')
          return;
        }
    
        if (error) {
          toast(error, {
            position: toast.POSITION.BOTTOM_CENTER,
            type: 'error',
            onOpen: () => { dispatch(clearError()) }
          })
          return
        }
      }, [isProductCreated, error, navigate, dispatch,null])

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(SignupSchema)
    });


    return (
        <div className="main-form" >
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="heading-01">
                    <u className="heading021">Personal Details</u>
                </div>
                <div className="form-div-1" >


                    <div className="name-div">
                        <label className="name-label" >Name<span style={{ color: 'red' }}>*</span></label>
                        <input placeholder="  Enter Name" className="name-input" {...register("name")} />
                        {errors && errors.name && <p>{errors.name.message}</p>}

                    </div>
                    <div className="dateofbirthorage-div" style={{ marginBottom: 10 }}>
                        <label  className="dateofbirthorage-label">Date of Birth or Age<span style={{ color: 'red' }}>*</span> </label>
 
                        <input placeholder=" DD/MM/YYYY or Age in Years" className="dateofbirthorage-input" {...register("dateofbirthorage")} />
                        {errors && errors.dateofbirthorage && <p>{errors.dateofbirthorage.message}</p>}
                    </div>
                    <div className="sex-div" >
                        <label className="Sex-label" >Sex<span style={{ color: 'red' }}>*</span></label>
                        <select className="sex-input" {...register("sex")}>
                            {sexOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        {errors && errors.sex && <p>{errors.sex.message}</p>}
                    </div> 
                </div>


                <div className="form-div-2" >
                    <div className="mobile-div">
                        <label className="mobile-label" >Mobile</label>
                        <input placeholder="  Enter Mobile" className="mobile-input" type="number" {...register("mobile")} />
                        {errors && errors.mobile && <p>{errors.mobile.message}</p>}
                    </div>
                    <div className="govt-issued-div" style={{ marginBottom: 10 }}>
                        <label className="govt-issued-label">Govt Issued ID </label>

                        <select className="govt-issueds-input" {...register("idtype")}>
                            {idtypeoptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        {errors && errors.idtype && <p>{errors.idtype.message}</p>}
                        <input className="govt-issued-input" placeholder="  Enter Govt ID" {...register("govtid")} />
                        {errors && errors.govtid && <p>{errors.govtid.message}</p>}
                    </div>

                </div>

                <div className="heading-01">
                    <u className="heading021">Contact Details</u>
                </div>

                <div className="form-div-3" >


                    <div className="guardian-div">
                        <label className="guardian-label" >Guardian details</label>
                        <select className="guardian-select-input" {...register("guardianlabel")}>
                            {guardianLabelOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))} 
                        </select>
                        {errors && errors.guardianlabel && <p>{errors.guardianlabel.message}</p>}
                        <input placeholder="  Enter Guardian Name" className="guardian-input" {...register("guardianname")} />
                        {errors && errors.guardianname && <p>{errors.guardianname.message}</p>}
                    </div>
                    <div className="email-div" style={{ marginBottom: 10 }}>
                        <label className="email-label">Email </label>

                        <input type="email" placeholder="  Enter Email" className="email-input" {...register("email")} />
                        {errors && errors.email && <p>{errors.email.message}</p>}
                    </div>
                    <div className="emergency-contact-number-div" >
                        <label className="emergency-contact-number-label" >Emergency Contact Number</label>
                        <input type="number" placeholder=" Enter Emergency No" className="emergency-contact-number-input" {...register("emergencycontactnumber")} />
                        {errors && errors.emergencycontactnumber && <p>{errors.emergencycontactnumber.message}</p>}
                    </div>
                </div>


                <div className="heading-01">
                    <u className="heading021">Address Details</u>
                </div>

                <div className="form-div-4" >


                    <div className="address-div">
                        <label className="name-label" >Address</label>
                        <input placeholder="  Enter Address" className="address-input" {...register("address")} />
                        {errors && errors.address && <p>{errors.adress.message}</p>}
                    </div>
                    <div className="state-div" style={{ marginBottom: 10 }}>
                        <label className="state-label">State </label>

                        <input placeholder=" State" className="state-input" {...register("state")} />
                        {errors && errors.state && <p>{errors.state.message}</p>}
                    </div>
                    <div className="city-div" >
                        <label className="city-label" >City</label>
                        <input placeholder="Enter city/town/village" className="city-input" {...register("city")} />
                        {errors && errors.city && <p>{errors.city.message}</p>}
                    </div>

                </div>
                <div className="subdiv-1" >

                    <div className="country-div" style={{ marginBottom: 10 }}>
                        <label className="country-label">Country </label>

                        <input className="country-input" {...register("country")} />
                        {errors && errors.country && <p>{errors.country.message}</p>}
                    </div>
                    <div className="pincode-div" >
                        <label className="pincode-label" >City</label>
                        <input placeholder="  Enter pincode" className="pincode-input" {...register("pincode")} />
                        {errors && errors.pincode && <p>{errors.pincode.message}</p>}
                    </div>
                </div>


                <div className="heading-01">
                    <u className="heading021">Other Details</u>
                </div>

                <div className="form-div-5" >


                    <div className="occupation-div">
                        <label className="occupation-label" >Occupation</label>
                        <input placeholder="  Enter Occupation" className="occupation-input" {...register("occupation")} />
                        {errors && errors.occupation && <p>{errors.occupation.message}</p>}
                    </div>
                    <div className="religion-div" style={{ marginBottom: 10 }}>
                        <label className="religion-label">Religion </label>

                        <select className="religion-input" {...register("religion")}>
                            {religionOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        {errors && errors.religion && <p>{errors.religion.message}</p>}
                    </div>
                    <div className="marital-status-div" >
                        <label className="marital-status-label" >Marital status</label>
                        <select className="marital-status-input" {...register("maritalstatus")}>
                            {maritalStatusOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>

                        {errors && errors.maritalstatus && <p>{errors.maritalstatus.message}</p>}
                    </div>
                    <div className="blood-group-div" >
                        <label className="blood-group-label" >blood group</label>
                        <select className="blood-group-input" {...register("bloodgroup")}>
                            {bloodGroupOptions.map((option) => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        {errors && errors.bloodgroup && <p>{errors.bloodgroup.message}</p>}
                    </div>
                </div>

                <div className="nationality-div" >
                    <label className="nationality-label" >Nationality</label>
                    <input className="nationality-input" {...register("nationality")} />
                    {errors && errors.nationality && <p>{errors.nationality.message}</p>}
                </div>
                <div>
                    <button className="cancel-btn" >Cancel <br></br> <u>(Esc)</u></button>
                    <button className= "submit-btn" type="submit" disabled={loading}> Submit <br></br> <u>(S)</u></button>

                </div>
                {error && <p>{error}</p>} 
                {isProductCreated && (
                    <p>User has been created successfully.</p>  
                )}
            </form>

            <div className="rowas">

            </div>
        </div>
    );
}

export default Form