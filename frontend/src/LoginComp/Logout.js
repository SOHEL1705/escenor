import React from 'react'
import Button from 'react-bootstrap/esm/Button'
const Logout = () => {
    const LogoutHandle =()=>{
        localStorage.removeItem('token');
        window.location.reload()
    }
  return (
    <div>
      <Button onClick={LogoutHandle}>
            LOGOUT
      </Button>
    </div>
  )
}

export default Logout
