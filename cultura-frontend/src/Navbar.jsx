import logo from "C:/Users/ayevc/Downloads/culture_transparent.png"

function Navbar() {
    return (
        <div className="navbar-wrapper">
            <img src={logo} alt='Cultura Logo' className="cultura_logo"/>
            <button className="login">Login</button>
        </div>
    )
}

export default Navbar