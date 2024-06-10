import React, { useState } from 'react'

function Login() {


    const [uname, setname] = useState("")
    const [upass, setpass] = useState("")
    const [login, setlogin] = useState(false)

    const handellogin = () => {
        var username = "sheyam"
        var pass = "123@"

        if (username === uname && pass === upass) {
            setlogin(true)
        }

    }



    const handeluname = (evt) => {
        setname(evt.target.value)
    }
    const handelpass = (evt) => {
        setpass(evt.target.value)
    }

    return (
        <>
            <h2>Login</h2>

            {
                login ? <h3>Login Sucessfull</h3> : <div>
                    <input value={uname} onChange={handeluname} placeholder='name'>Name</input>  <br />
                    <input value={upass} onChange={handelpass} placeholder='mail'>Email</input><br />
                    <button onClick={handellogin}>Login</button>
                </div>
            }
        </>
    )
}

export default Login