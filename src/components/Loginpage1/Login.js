import React from 'react'

const Login = () => {
    return (
        <div>
            <div className="login-page-1">
                <div className="row">
                    <div className="col-md-6 d-flex align-items-center justify-content-cemter">
                        <div className="text-part d-flex flex-column">
                            <h1>LOGIN</h1>
                            <input type="text" placeholder="name" />
                            <input type="text" placeholder="password" />
                            <button>Login</button>
                            <div className="d-flex justify-content-between">
                                <a href="">forget password</a>
                                <a href="">Register</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <img src="https://media.istockphoto.com/vectors/cartoon-burger-vector-isolated-illustration-vector-id1184633031?b=1&k=20&m=1184633031&s=612x612&w=0&h=Hu8bo3bDdOUxJKbc_dMnW2PaNfInNtoALr80RREkax4=" alt="" />
                    </div>
                </div>
                <div className="login-page-1-rectange"></div>
            </div>
            
        </div>
    )
}

export default Login;