import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import {getProfile} from './UserFunctions' 
import Axios from 'axios'
import { Category } from './CategoryFunctions'

class Nav extends Component {
  constructor(){
    super()
    this.state = {
        name : '',
        email : '',
        avatar:'',
        categories:[],  
        products:[]
       
    }
}
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
}
componentDidMount() {
  Category().then((res) => {
    console.log(res);
    console.log("didMount");
    this.setState({ categories: res });
  });
}


    render() {
      const loginRegLink =(
        <div className="d-flex flex-column">
        {/* <button className="aa"><Link to="/login"     style={{color:"white" }} >Accéder à mon Espace </Link></button> */}
        <button type="button" className="aa" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo"><Link to="/login"     style={{color:"white" }} >Accéder à mon Espace </Link></button>
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
         
            {this.state.categories.map((category, i) => (
         
            <li className="nav-item active" key={i}>
              <a className="nav-link nl" href={"/productbycat" +category.id} style={{color:"#B8B8B8", textTransform:"uppercase"}} >{category.name}</a>
            </li>
           ))} 
        
          
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