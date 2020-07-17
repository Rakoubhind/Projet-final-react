import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default class TotalLocation extends Component {
    constructor()
   {
      super();
      this.state = {
         products:[],
        //  activePage:1,
        //  itemsCountPerPage:1,
        //  totalItemsCount:1

      }
  
  // this.handlePageChange = this.handlePageChange.bind(this);
  }
  componentDidMount()
  {
    axios.get('http://localhost:8000/api/productuser' ,{
        headers : { Authorization  : `Bearer ${localStorage.usertoken }` }
       
   })
    
    .then(response=>{
      console.log(response.data);
       this.setState({products:response.data.product});
    //    console.log(response.data.product[0].titre)
    });
  }
  // handlePageChange(pageNumber) {
  //   console.log(`active page is ${pageNumber}`);
  //   // this.setState({activePage: pageNumber});
  //   axios.get('http://localhost:8000/api/products?page='+pageNumber) 
  //   .then(response=>{
  //      this.setState({
  //        products:response.data.data,
  //       //  activePage:response.data.current_page,
  //       //  itemsCountPerPage:response.data.per_page,
  //       //  totalItemsCount:response.data.total
  //       });
  //      console.log(response.data)
  //   });
  // }
  
  onDelete(product_id){
    axios.delete(`http://localhost:8000/api/products/delete/${product_id}`) 
    .then(response=>{
        console.log(response)
// var products = Object.assign([] , this.state.products);
var products = this.state.products;
for (var i=0 ; i < products.length ; i++){
if(products[i].id==product_id)
{
    products.splice(i,1);
    this.setState({products:products});
}
}
    });

}
  
    render() {
        return (
            <div>
                 <div>
            <section className="coloc_menu coloc_menu_prop ">
            <div className="widthMax center d-flex">
                <ul>
                    <li><a href="/totallocation" className="ahovv">Mes locations</a></li>
                    <li><a href="/cordonnes" className="ahovv">Mes coordonnées</a></li>
                    
          			</ul>
            </div>
        </section>
        <div className="widthMax center bg-white pbs pts">		
					<div className="listing_potentiel prm plm">
					<table className="liste_colocataire">
						<thead>
							<tr className="th">
							
								
								<th className="header">Titre</th>
								<th className="header">Description</th>
								<th className="header">Surface hab.</th>
								<th className="header">Chambres</th>
								<th className="header">Loyer</th>
								<th className="header">Adresse</th>
								
								<th className="header"></th>
                                <th className="header"> </th>
							</tr>
						</thead>
						<tbody>		
      { this.state.products.map(product=>{
return(
			<tr className="spaced">
                 <td className="txtLeft">{product.titre}</td>
                <td className="txtCenter txtcenter" >{product.description.substring( 0, 38)}</td>
                <td className="txtCenter txtcenter" >
                <span className="mobileOnly"></span>{product.surface}m²</td>
                <td className="txtCenter txtcenter" >
                <span className="mobileOnly"> </span>{product.chambre}</td>
                <td className="txtCenter txtcenter">
                    <span className="mobileOnly"> </span>{product.prix}Dh</td>
               <td className="txtCenter txtcenter">
                        <span className="mobileOnly"></span>{product.adresse}</td>
                        {/* <td className="txtCenter txtcenter"> */}
                            {/* <a id="left_664572" className="louee_alouer left_alouer" href="#" title="">À louer</a>
                            <a id="right_664572" className="louee_alouer right_alouer" href="#" >Louée</a> */}
                           <td className="oneIcon"><Link to={`/mylocation/edit/${product.id}`} ><i className="fa fa-pencil" aria-hidden="true"></i>
                           </Link></td>
                           <td className="oneIcon"><Link to="#"  onClick={this.onDelete.bind(this,product.id)}><i className="fa fa-trash"></i>
                           </Link></td>
          </tr>
          )
        }
        )
          }
                </tbody>
					</table>
				</div>
				
						<div className="clear"></div>
			
			<a href="/mylocation" className="bigcta">Créer une nouvelle location</a>
            {/* <h1>{this.state.name}</h1>
		    <h1>{this.state.email}</h1> */}
		</div>
        </div>
            </div>
        )
    }
}
