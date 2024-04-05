import react from 'react';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import { UseDispatch } from 'react-redux';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { logoutUser } from '../actions/userAction';

export default function Navbar() {
  const cartState = useSelector(state => state.addToCartReducer)
  const userState = useSelector(state => state.loginUserReducer)
  const dispatch = useDispatch();
  const isCurrentUserEmpty = !userState.currentUser || userState.currentUser.length === 0;
  function logout() {
    dispatch(logoutUser())
  }

  return (
    <>
      <div className='container-fluid'>
        <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
          <a className="navbar-brand" href="/">OrderEase</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              {(!isCurrentUserEmpty) &&

                (
                  (!userState.currentUser.isAdmin) &&
                  (
                    <li className="nav-item active">
                      <a className="nav-link" href="/">Home <span className="sr-only"></span></a>
                    </li>
                  )


                )
              }
              {(!isCurrentUserEmpty) ?
                (
                  <div>
                    {(userState.currentUser.isAdmin) ?
                      (
                        <div className="dropdown">
                          <Nav>
                            <NavDropdown
                              id="nav-dropdown-dark-example"
                              title={userState.currentUser.name}
                              menuVariant="light"
                            >

                              <NavDropdown.Item onClick={logout}>LogOut</NavDropdown.Item>
                            </NavDropdown>
                          </Nav>
                        </div>

                      )
                      :
                      (
                        <div className="dropdown">
                          <Nav>
                            <NavDropdown
                              id="nav-dropdown-dark-example"
                              title={userState.currentUser.name}
                              menuVariant="light"
                            >
                              <NavDropdown.Item href="/myorders">
                                My Orders
                              </NavDropdown.Item>
                              <NavDropdown.Item onClick={logout}>LogOut</NavDropdown.Item>
                            </NavDropdown>
                          </Nav>
                        </div>
                      )
                    }
                  </div>
                )
                :
                (
                  <li className="nav-item">
                    <a className="nav-link" href="/login">Login</a>
                  </li>
                )
              }
              {(!isCurrentUserEmpty) &&

                (
                  (!userState.currentUser.isAdmin) &&
                  (
                    <li className="nav-item">
                      <a className="nav-link " href="/addtocart">Cart {cartState.cartItems.length}</a>
                    </li>
                  )


                )
              }
            </ul>
          </div>
        </nav>
      </div>
    </>
  )
}

