import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { createContact } from '../store/actions/contactAction'
import {useHistory, Link} from 'react-router-dom'

export default function Form() {
    const dispatch = useDispatch()
    const history = useHistory();

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [phone, setPhone] = useState("")
    const [image, setAvatar] = useState(null)

    function doSubmit(e){
        e.preventDefault()
        dispatch(createContact({name,email,address,phone,image}))
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

    function avatarHandler(e){
        setAvatar(e.target.files[0])
        console.log(image)
    }

    return (
        <>
        <div className="container">
            <h2 className="mt-4">Add New Contact</h2>
            <p>Please input valid data</p>
            <form onSubmit={doSubmit} method="post">
                    <div className="input-group mt-3"> 
                        <div className="input-group-prepend"><span className="input-group-text" id="basic-addon1"><i className="far fa-user"></i></span></div>
                        <input onChange={nameHandler} className="form-control" type="text" placeholder="Name" required maxLength="30"></input>
                    </div>
                    <div className="input-group mt-3"> 
                        <div className="input-group-prepend"><span className="input-group-text" id="basic-addon1"><i className="far fa-address-book"></i></span></div>
                        <input onChange={addressHandler} className="form-control" type="text" placeholder="Address" required maxLength="30"></input>
                    </div>
                    <div className="input-group mt-3"> 
                        <div className="input-group-prepend"><span className="input-group-text" id="basic-addon1"><i className="fas fa-mobile-alt"></i></span></div>
                        <input onChange={phoneHandler} className="form-control" type="text" placeholder="Phone Number" required maxLength="30"></input>
                    </div>
                    <div className="input-group mt-3"> 
                        <div className="input-group-prepend"><span className="input-group-text" id="basic-addon1"><i className="far fa-envelope"></i></span></div>
                        <input onChange={emailHandler} className="form-control" type="email" placeholder="email" required maxLength="30"></input>
                    </div>
                    <div className="input-group mt-3"> 
                        <div className="input-group-prepend"><span className="input-group-text" id="basic-addon1"><i className="far fa-envelope"></i></span></div>
                        <input className="form-control" onChange={avatarHandler} type="file"></input>
                    </div>
                    <div className="d-flex">
                        <button className="btn btn-primary mt-3 mb-2 mr-3" type="submit" style={{width:"50%"}}>CREATE</button>
                        <Link to="/" className="btn btn-danger mt-3 mb-2" style={{width:"50%"}}>CANCEL</Link>
                    </div>
            </form>
        </div>
        </>
    )
}