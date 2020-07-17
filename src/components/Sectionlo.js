import React, { Component } from 'react'
import axios from 'axios'
// import ReactPaginate from 'react-paginate';
import Pagination from "react-js-pagination"
import { Category } from "./CategoryFunctions";
import { Link } from 'react-router-dom';
// import CheckBox from './Checkbox';

export default class Sectionlo extends Component {
   constructor()
   {
      super();
      this.state = {
         products:[],
         activePage:1,
         itemsCountPerPage:1,
         totalItemsCount:1,
         categories: [],

      }
  
  this.handlePageChange = this.handlePageChange.bind(this);
  }
  componentDidMount()
  {
    axios.get('http://localhost:8000/api/products') 
    .then(response=>{
      console.log('response');
       this.setState({products:response.data.data});
       console.log(response.data)
    });
    Category().then((res) => {
      console.log(res);
      console.log("didMount");
      this.setState({ categories: res });
    });
  }
  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    // this.setState({activePage: pageNumber});
    axios.get('http://localhost:8000/api/products?page='+pageNumber) 
    .then(response=>{
       this.setState({
         products:response.data.data,
         activePage:response.data.current_page,
         itemsCountPerPage:response.data.per_page,
         totalItemsCount:response.data.total
        });
       console.log(response.data)
    });
  }
  render() {
  
    return (
      <section id="gallery-page-content" class="section-padding">
      <div class="container">
     
        <div class="row">
          <div class="col-lg-12">
        <div class="popular-cars-wrap">
          <div class="popucar-menu text-center">
            <a to="/demandelo" data-filter="*" class="active">all</a>
            {this.state.categories.map((category, i) => (
            <a to="#" data-filter=".con" key={i} onChange={this.handleFilters}>{category.name}</a>
            ))}
           
          </div>
           
          <div class="row popular-car-gird">
          { this.state.products.map(product=>{
        return(
            <div class="col-lg-4 col-md-6 con suv mpv">
              <div class="single-popular-car">
                <div class="p-car-thumbnails">
                  <a class="car-hover" href={`http://localhost:8000/storage/${product.image1}` }>
                  <img src={`http://localhost:8000/storage/${product.image1}` } alt="img" width='400' height='200'/>
                 
                   </a>
                </div>

                <div class="p-car-content">
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
      <div class="d-flex justify-content-center">
          <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={this.state.itemsCountPerPage}
          totalItemsCount={this.state.totalItemsCount}
          pageRangeDisplayed={this.state.pageRangeDisplayed}
          onChange={this.handlePageChange}
          itemClass='page-item'
          linkClass='page-link'
        />
      
        </div>
  </section>
   
          
      )}
      }