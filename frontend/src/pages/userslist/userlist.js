import { Fragment, useEffect } from "react"

import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import {  fetchUsers } from "../../redux/Actions/userActions"
import { clearError } from "../../redux/Slices/usersSlice"

import {MDBDataTable} from 'mdbreact'



export default function Userlist(){
    const { users , loading = true, error }  = useSelector(state => state.usersState)
   
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUsers());
      }, [dispatch]);

    const setProducts = () => {
        const data = {
            columns : [
               
                {
                    label: 'Name',
                    field: 'name',
                    sort: 'asc'
                },
                {
                    label: 'Age',
                    field: 'age',
                    sort: 'asc'
                },
                {
                    label: 'Sex',
                    field: 'sex',
                    sort: 'asc'
                },
                {
                    label: 'Mobile',
                    field: 'mobile',
                    sort: 'asc'
                },
                {
                    label: 'Address',
                    field: 'address',
                    sort: 'asc'
                },
                {
                    label: 'Govt ID Type',
                    field: 'idtype',
                    sort: 'asc'
                },
                {
                    label: 'Govt ID',
                    field: 'govtid',
                    sort: 'asc'
                },
                {
                    label: 'Guardian Details',
                    field: 'guardiandetails',
                    sort: 'asc'
                },
                {
                    label: 'Nationality',
                    field: 'nationality',
                    sort: 'asc'
                }
            ],
            rows : []
        }

        users.forEach( user => {
            data.rows.push({
               
                name: user.name,            
                age: user.dateofbirthorage,
                sex: user.sex,
                mobile: user.mobile,
                address: user.address,
                idtype:user.idtype,
                govtid: user.govtid,
                guardiandetails: user.guardianlabel,
                nationality: user.nationality

               
            })
        })

        return data;
    }

   

 
    return(
        <div className="row">
        
        <div className="col-12 col-md-10">
            <h1 className="my-4">Users List</h1>
            <Fragment>
               

                <MDBDataTable
                     data={setProducts()}
                     bordered
                     striped
                     hover
                     className="px-3"
                />
               
            </Fragment>

        </div>
    </div>

    )
}