import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import {getProfile} from './UserFunctions' 

class Nav extends Component {
  constructor(){
    super()
    this.state = {
        name : '',
        email : '',
        avatar:'',
       
    }
}
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
}


    render() {
      const loginRegLink =(
        <div className="d-flex flex-column">
        {/* <button className="aa"><Link to="/login"     style={{color:"white" }} >Accéder à mon Espace </Link></button> */}
        <button type="button" class="aa" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo"><Link to="/login"     style={{color:"white" }} >Accéder à mon Espace </Link></button>

  {/* <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
   <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">New message</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        <form>
          <div className="form-group">
            <label htmlFor="recipient-name" className="col-form-label">Recipient:</label>
            <input type="text" className="form-control" id="recipient-name" />
          </div>
          <div className="form-group">
            <label htmlFor="message-text" className="col-form-label">Message:</label>
            <textarea className="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Send message</button>
      </div>
    </div>
  </div>
</div> */}
        <button className="ab"><Link to="./register" style={{color:'#FC822B'}}> Pas Encore Inscrit ? </Link></button>
         </div>)
 const userLink =
 (
  <div className="d-flex flex-column">
    {/* <img src={`http://localhost:8000/storage/${this.state.avatar}`} alt="Avatar" className="avatar"/> */}
  <button className="aa"><Link style={{color:"white" }} to="./totallocation">Mon Espace </Link></button>
  <button className="ab"><Link to="/" onClick={this.logOut.bind(this)} style={{color:'#FC822B'}}> Déconnexion </Link></button>
   </div>
 )
        return<nav className="navbar navbar-expand navbar-dark bg-white">
        <img src="logoser.jpg"/>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample02" aria-controls="navbarsExample02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarsExample02">
         
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link nl" href="/" style={{color:"#B8B8B8"}}>LOCATION <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link nl" href="#" style={{color:"#B8B8B8"}}>MAISONS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nl " href="#" style={{color:"#B8B8B8"}}>STUDIOS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nl" href="#" style={{color:"#B8B8B8"}}>VILLAS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link nl" href="#" style={{color:"#B8B8B8"}}>APPARTEMENTS</a>
            </li>
          </ul>

          {/* <form className="form-inline my-2 my-md-0">
            <input className="form-control" type="text" placeholder="Search">
          </form> */}
        </div>
        <div className="">
        {localStorage.usertoken ? userLink : loginRegLink}
             </div>
        
      </nav>


   }
}
export default withRouter(Nav)