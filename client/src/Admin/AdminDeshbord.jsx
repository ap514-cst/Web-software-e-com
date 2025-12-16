import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Users from './Users';

const AdminDeshbord = ({ setIsAuthenticated }) => {
  const [users, setUsers] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/user/users")
      .then((res) => res.json())
      .then((data) => {


        setUsers(data)
        setIsAuthenticated(true)
      }, [0])
  })
  return (
    <div>
      <h1 className='text-center'>User Data </h1>
      {
        users && users.users.map((item) => <Users key={item._id} users={item} />




        )
      }



    </div>
  )
}

export default AdminDeshbord
