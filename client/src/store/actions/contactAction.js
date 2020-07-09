import swal from 'sweetalert'
import axios from 'axios'

const url = 'http://localhost:3000'

export function getAllContacts(){
    return (dispatch) => {
        axios({
            url: url + '/books',
            method: 'get'
        })
        .then(response => {
            dispatch({
                type: 'GET_CONTACTS',
                payload: response.data
            })
        })
        .catch(err=>{
            swal("Error!","Cannot Retrieve Contacts","error")
        })
    }
}

export function createContact(data){
    return (dispatch) => {
        axios({
            url: url + '/books',
            method: 'post',
            data: data
        })
        .then(response => {
            dispatch({
                type: 'SET_CONTACT',
                payload: response.data
            })

            return axios({
                url: url + `/books/avatar/${response.data.contact.id}`,
                method: 'post',
                data: data.image
            })
        })
        .then(final => {
            console.log(final)
        })
        .catch(err=>{
            swal("Error!",err.response.data.error,"error")
        })
    }
}

export function getContactId(id){
    return (dispatch) => {
        axios({
            url: url + '/books/' + id,
            method: 'get'
        })
        .then(response => {
            dispatch(setContact(response.data.contact))
        })
        .catch(err=>{
            swal("Error!",err.response.data.error,"error")
        })
    }
}

export function editContact(id,data){
    return (dispatch) => {
        axios({
            url: url + '/books/' + id,
            method: 'put',
            data: data
        })
        .then(response => {
            swal("Done!","Contact has been edited","success")
        })
        .catch(err=>{
            swal("Error!",err.response.data.error,"error")
        })
    }
}

export function removeContact(id){
    return (dispatch)=>{
        console.log(``)
        axios({
            url: `${url}/books/${id}`,
            method: "delete"
        })
        .then(response=>{
            swal("Done!","Contact has been deleted","success")
        })
        .catch(err=>{
            swal("Error!",err.response.data.error,"error")
        })
    }
}

export const setContact = (value) => {
    return {
        type : 'SET_CONTACT',
        payload : value
    }
}