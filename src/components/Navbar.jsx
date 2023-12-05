import React from 'react'

const Navbar = ({SetCategory}) => {
    return (
        <>
            <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid" >
                 
                    <a className="navbar-brand" href="#"><span className='badge bg-secondary'>News 24x7</span></a>
                
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                        <div className="nav-link" onClick={()=>{SetCategory("entertainment")}}>entertainment</div>
                        </li>
                    </ul>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                        <div className="nav-link" onClick={()=>{SetCategory("business")}}>business</div>
                        </li>
                    </ul>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                        <div className="nav-link" onClick={()=>{SetCategory("sports")}}>sports</div>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </div>
        </>
        
    )
}

export default Navbar