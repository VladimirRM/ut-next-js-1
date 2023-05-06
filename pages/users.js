import { useState } from "react";


const Users = () => {
    const [users,setUsers]= useState([

        {id:1, name:'Petya'},
        {id:2, name:'Vasya'},
    ])
    return (
        <div>
            <h1>Список пользователей</h1>
            <ul>
                {users.map(user=>
                    <li>
                        {user.name}
                    </li>)}
            </ul>

        </div>
    );
};

export default Users;