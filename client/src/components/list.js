import React from 'react'
import {Link} from 'react-router-dom'

export default function List(props) {

    return (
        <>
        <table className="table">
            <thead className="thead-light">
                <tr>
                <th scope="col">Photo</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Mark</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>
                    {/* btn btn-info */}
                        <Link data-testid="to-detail-btn" to={`/edit/1`} className="btn btn-primary">Edit</Link>
                        <button type="button" className="btn btn-danger ml-2">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
        </>
    )
}