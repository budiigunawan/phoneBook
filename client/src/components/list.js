import React,{useEffect} from 'react'
import {Link} from 'react-router-dom'

import { useSelector, useDispatch} from 'react-redux'
import {getAllContacts, removeContact, getContactId} from '../store/actions/contactAction'
import swal from 'sweetalert'

export default function List() {
    const contacts = useSelector((state)=> state.contactReducer.contacts)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAllContacts())
    },[contacts, dispatch])

    function deleteContact(id) {
        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
                dispatch(removeContact(id))
            } else {
              swal("Your imaginary file is safe!");
            }
          });
    }

    function editHandler(id) {
        dispatch(getContactId(id))
    }

    return (
        <>
        {/* {JSON.stringify(contacts)} */}
        <table className="table">
            <thead className="thead-light">
                <tr>
                <th scope="col">Photo</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map((contact)=>{
                    return(
                        <tr key={contact.id}>
                            <td>
                                {/* <img src={`../../../server/public/uploads/${contact.image}`} alt="contact" /> */}
                                <img style={{width:48,height:48}} src={'/default.png'} alt="contact" />
                            </td>
                            <td>{contact.name}</td>
                            <td>{contact.phone}</td>
                            <td>{contact.email}</td>
                            <td>{contact.address}</td>
                            <td>
                                <Link data-testid="to-detail-btn" onClick={()=>editHandler(contact.id)} to={{pathname: `/edit/${contact.id}`, state: {contact}}} className="btn btn-primary">Edit</Link>
                                <button type="button" onClick={()=>{
                                    deleteContact(contact.id)
                                }} className="btn btn-danger ml-2">Delete</button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        </>
    )
}