import { Link } from "react-router-dom"


const Login = () => {
    return (
        <div>
            <h1>Login Page</h1>
            <Link to='/home'>Home</Link>
            <Link to='/about-page'>About</Link>
        </div>
    )
}

export default Login