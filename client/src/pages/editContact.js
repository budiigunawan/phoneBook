import React,{useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { editContact } from '../store/actions/contactAction'
import {useHistory, Link} from 'react-router-dom'

export default function FormEdit() {
    const dispatch = useDispatch()
    const history = useHistory();

    const contact = useSelector(state => state.contactReducer.contact)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")

    useEffect(()=>{
        if(contact){
            setName(contact.name)
            setEmail(contact.email)
            setAddress(contact.address)
            setPhone(contact.phone)
        }
    },[contact])

    function doSubmit(id){
        console.log(id)
        dispatch(editContact(id,{name,email,address,phone}))
        history.push('/')
    }

    function nameHandler(e){
        setName(e.target.value)
    }

    function emailHandler(e){
        setEmail(e.target.value)
    }

    function addressHandler(e){
        setAddress(e.target.value)
    }

    function phoneHandler(e){
        setPhone(e.target.value)
    }

    return (
        <>
        {contact && <div className="container">
            <h2 className="mt-4">Edit Contact</h2>
            <p>Please input valid data</p>
            <form method="post">
                    <div className="input-group mt-3"> 
                        <div className="input-group-prepend"><span className="input-group-text" id="basic-addon1"><i className="far fa-user"></i></span></div>
                        <input onChange={nameHandler} className="form-control" type="text" placeholder="Name" required maxLength="30" value={name} ></input>
                    </div>
                    <div className="input-group mt-3"> 
                        <div className="input-group-prepend"><span className="input-group-text" id="basic-addon1"><i className="far fa-address-book"></i></span></div>
                        <input onChange={addressHandler} className="form-control" type="text" placeholder="Address" required maxLength="30" value={address}></input>
                    </div>
                    <div className="input-group mt-3"> 
                        <div className="input-group-prepend"><span className="input-group-text" id="basic-addon1"><i className="fas fa-mobile-alt"></i></span></div>
                        <input onChange={phoneHandler} className="form-control" type="text" placeholder="Phone Number" required maxLength="30" value={phone}></input>
                    </div>
                    <div className="input-group mt-3"> 
                        <div className="input-group-prepend"><span className="input-group-text" id="basic-addon1"><i className="far fa-envelope"></i></span></div>
                        <input onChange={emailHandler} className="form-control" type="email" placeholder="email" required maxLength="30" value={email}></input>
                    </div>
                    <div className="d-flex">
                        <button className="btn btn-primary mt-3 mb-2 mr-3" type="button" onClick={()=>doSubmit(contact.id)} style={{width:"50%"}}>EDIT</button>
                        <Link to="/" className="btn btn-danger mt-3 mb-2" style={{width:"50%"}}>CANCEL</Link>
                    </div>
            </form>
        </div>
        }
        </>
    )
}