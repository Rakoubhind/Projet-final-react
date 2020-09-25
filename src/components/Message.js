import React, { Component } from 'react'
import Axios from 'axios';

export default class Message extends Component {
    constructor()
    {
       super();
       this.state = {
       notifications:[],
        
       }
    }
 componentDidMount()
  {
    Axios.get('http://localhost:8000/api/productmessage' ,{
        headers : { Authorization  : `Bearer ${localStorage.usertoken }` }
       
   })
    
    .then(response=>{
      console.log(response.data);
       this.setState({notifications:response.data ,
      // user:response.data.product.user.name 

      });
    });
  }

    render() {

        return (
            <div>
                 <section className="coloc_menu coloc_menu_prop ">
            <div className="widthMax center d-flex">
                <ul>
                    <li><a href="/totallocation" className="ahovv  hvr-bounce-in">Mes locations</a></li>
                    <li><a href="/cordonnes" className="ahovv hvr-bounce-in">Mes coordonnées</a></li>
                    <li><a href="/message" className="ahovv hvr-bounce-in">Messages</a></li>
          			</ul>
            </div>
        </section>
        <table className="table table-striped mt-4" >
        
        <tbody>
          <tr className="">
            <th scope="row">1</th>
            <td>Hind Rakoub</td>
            <td>Je suis intéréssée</td>
            <td className="time">00:30 PM</td>
          </tr>
          {/* <tr className="">
            <th scope="row">2</th>
            <td>hindd</td>
            <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam neque sem.</td>
            <td className="time">15:30 PM</td>
          </tr> */}
         
        </tbody>
      </table>
            </div>
        )
    }
}
