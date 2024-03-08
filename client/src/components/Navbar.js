import react from 'react';
export default function Navbar(){
    return (
   <>
   <div className='container'>
<nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
  <a className="navbar-brand" href="#">OrderEase</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
      </li>    
      <li className="nav-item">
        <a className="nav-link" href="/login">Login</a>
      </li>
      <li className="nav-item">
        <a className="nav-link " href="#">Cart</a>
      </li>
    </ul>
  </div>
</nav>
</div>
</>
    )
}

