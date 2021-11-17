import React from 'react';

export default function Userlist(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.users.length > 0 ? (
                    props.users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>
                                <button className="btn btn-danger" onClick={ () => {props.editRow(user)} }>Edit</button>
                                <span> </span>
                                <button className="btn btn-danger" onClick={ () => {props.delUser(user.id)} }>Delete</button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={3}>No users</td>
                    </tr>
                )}    
            </tbody>
        </table>
    );
}
