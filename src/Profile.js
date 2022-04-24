import { Button } from 'reactstrap';
import React from 'react'

function Profile() {
  var x = localStorage.getItem("token");
  var user = JSON.parse(localStorage.getItem('user'));
  return (
    <div>
      <h1>This is profile {user.name}</h1>
      <h1>This is profile {user.desc}</h1>
      <h1>This is profile {user.category}</h1>
      <h1>This is profile {user.vision}</h1>
      <h1>This is profile {user.address}</h1>
      <h1>This is profile {user.phoneno}</h1>
      <h1>This is profile {user.loc}</h1>
      <h1>This is profile {user.campaign1}</h1>
      <h1>This is profile {user.campaign2}</h1>
      <h1>This is profile {user.campaign3}</h1>
      <h1>This is profile {user.email}</h1>
      <Button>Update</Button>
      <Button>Logout</Button>
    </div>
  )
}

export default Profile