import React, { Component } from 'react'
import Axios from 'axios';


export default class Productbycat extends Component {
    constructor(props) {
        super(props);
        this.state = {
          id: this.props.match.params.id,
          products: [],
         categories: [],

        };
        
      }
      componentDidMount(){
        const $id = this.state.id;
        Axios.get("http://localhost:8000/api/catproduct/" + $id).then((response) => {
          console.log(response);
          this.setState({
            products: response.data.product.data,
           
          });
    
         
        });
        console.log(this.state.product);
        
      }
    render() {
        return (
            
            <div>
            <section id="gallery-page-content" class="section-padding">
      <div class="container">
     
        <div class="row">
          <div class="col-lg-12">
        <div class="popular-cars-wrap">
          {/* <div class="popucar-menu text-center">
            <a to="/demandelo" data-filter="*" class="active">all</a>
            {this.state.categories.map((category, i) => (
            <a to="#" data-filter=".con" key={i} onChange={this.handleFilters}>{category.name}</a>
            ))}
           
          </div> */}
           
          <div class="row popular-car-gird">
          { this.state.products.map(product=>{
        return(
            <div class="col-lg-4 col-md-6 con suv mpv" >
              <div class="single-popular-car" style={{height:"450px"}}>
                <div class="p-car-thumbnails">
                  <a class="car-hover" href={`http://localhost:8000/storage/${product.image1}` }>
                  <img src={`http://localhost:8000/storage/${product.image1}` } alt="img" style={{width:'400px' , height:'300px'}}/>
                 
                   </a>
                </div>

                <div class="p-car-content"  >
                  <h3>
                    <a href={"/show"+ product.id}>{product.titre}</a>
                    <span class="price"><i class="fa fa-tag"></i> {product.prix}/day</span>
                  </h3>

                  <h5>{product.adresse}</h5>

                  <div _ngcontent-appserver-c14="" className="h4">
            <span _ngcontent-appserver-c14="" className="badge badge-primary font-weight-normal mr-2 ng-star-inserted"> {product.surface} m²</span>
            <span _ngcontent-appserver-c14="" className="badge badge-primary font-weight-normal mr-2 ng-star-inserted">{product.chambre} pièces</span>
            <span _ngcontent-appserver-c14="" className="badge badge-primary font-weight-normal mr-2 ng-star-inserted">{product.prix}&nbsp;€</span>
            </div>
          
          
          </div>
                </div>
              </div>
           
             )
            }
            )
              }
          </div>
            </div>
          </div>
        </div>
        
      </div>
      
  </section>
          </div>
        )
    }
}
