import react from 'react';
import { UseSelector, useSelector } from 'react-redux';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function Navbar() {
  const cartState = useSelector(state => state.addToCartReducer)
  const userState = useSelector(state => state.loginUserReducer)
  return (
    <>
      <div className='container'>
        <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
          <a className="navbar-brand" href="/">OrderEase</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
              </li>
              {(userState.currentUser) ?
                (<div class="dropdown">
                  <Nav>
                    <NavDropdown
                      id="nav-dropdown-dark-example"
                      title={userState.currentUser.name}
                      menuVariant="light"
                    >
                    
                      <NavDropdown.Item href="/">
                        Orders
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/logout">LogOut</NavDropdown.Item>

                    </NavDropdown>
                  </Nav>


                </div>)

                :
                (<li className="nav-item">
                  <a className="nav-link" href="/login">Login</a>
                </li>)
              }


              <li className="nav-item">
                <a className="nav-link " href="/addtocart">Cart {cartState.cartItems.length}</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}

