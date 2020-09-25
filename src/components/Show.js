import React, { Component } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";

export default class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      products: [],
      categories: [],
      requestStatus: true,
    };
  }
  componentDidMount() {
    const $id = this.state.id;
    axios.get("http://localhost:8000/api/products/" + $id).then((response) => {
      console.log(response);
      this.setState({
        products: response.data.product,
        category: response.data.product.category.name,
        user: response.data.product.user.phone,
      });
      this.setState({ requestStatus: false });
      console.log(this.state.products);
    });
  }
  render() {
    const noauth =(
      <a href={"/login"}>
      <button
        type="button"
        class="btn btn-light buzz-out-on-hover"
        // data-toggle="modal"
        // data-target="#exampleModal"
        style={{
          marginLeft: "20px",
          marginTop: "20px",
          paddingLeft: "50px",
          paddingRight: "13px",
          color: "#0089BF",
        }}
      >
        {" "}
        <span class="sc-AxgMl sc-AxheI keXlru">
          <svg
            class="av-icon"
            height="24"
            width="24"
            style={{
              fill: "currentColor",
              stroke: "currentColor",
              strokeWidth: "0",
            }}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-labelledby="ChatBubblesOutlineTitleID"
          >
            <title id="ChatBubblesOutlineTitleID">
              ChatBubblesOutline Icon
            </title>
            <path d="M10 14.676v-.062c0-2.508 2.016-4.618 4.753-5.233C14.389 7.079 11.959 5.2 8.9 5.2 5.58 5.2 3 7.413 3 9.98c0 .969.36 1.9 1.04 2.698.032.038.083.094.152.165a3.568 3.568 0 011.002 2.238 3.612 3.612 0 012.363-.442c.166.026.302.046.405.06A7.254 7.254 0 0010 14.675zm.457 1.951a9.209 9.209 0 01-2.753.055 19.056 19.056 0 01-.454-.067 1.612 1.612 0 00-1.08.212l-1.904 1.148a.806.806 0 01-.49.117.791.791 0 01-.729-.851l.15-1.781a1.565 1.565 0 00-.439-1.223 5.537 5.537 0 01-.241-.262C1.563 12.855 1 11.473 1 9.979 1 6.235 4.537 3.2 8.9 3.2c4.06 0 7.403 2.627 7.85 6.008 3.372.153 6.05 2.515 6.05 5.406 0 1.193-.456 2.296-1.229 3.19-.051.06-.116.13-.195.21a1.24 1.24 0 00-.356.976l.121 1.423a.635.635 0 01-.59.68.66.66 0 01-.397-.094l-1.543-.917a1.322 1.322 0 00-.874-.169c-.147.023-.27.04-.368.053a7.72 7.72 0 01-.969.062c-2.694 0-4.998-1.408-5.943-3.401zm6.977 1.31a3.325 3.325 0 011.676.174 3.25 3.25 0 01.841-1.502c.05-.05.087-.09.106-.112.489-.565.743-1.213.743-1.883 0-1.804-1.903-3.414-4.4-3.414-2.497 0-4.4 1.61-4.4 3.414s1.903 3.414 4.4 3.414c.241 0 .48-.016.714-.046.08-.01.188-.025.32-.046z"></path>
          </svg>
        </span>
        CONTACTEZ L'ANNONCEUR
      </button>
    </a>
  );
  const auth =(
    <a href={"/chat" + this.state.products.id}>
    <button
      type="button"
      class="btn btn-light buzz-out-on-hover"
      // data-toggle="modal"
      // data-target="#exampleModal"
      style={{
        marginLeft: "20px",
        marginTop: "20px",
        paddingLeft: "50px",
        paddingRight: "13px",
        color: "#0089BF",
      }}
    >
      {" "}
      <span class="sc-AxgMl sc-AxheI keXlru">
        <svg
          class="av-icon"
          height="24"
          width="24"
          style={{
            fill: "currentColor",
            stroke: "currentColor",
            strokeWidth: "0",
          }}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby="ChatBubblesOutlineTitleID"
        >
          <title id="ChatBubblesOutlineTitleID">
            ChatBubblesOutline Icon
          </title>
          <path d="M10 14.676v-.062c0-2.508 2.016-4.618 4.753-5.233C14.389 7.079 11.959 5.2 8.9 5.2 5.58 5.2 3 7.413 3 9.98c0 .969.36 1.9 1.04 2.698.032.038.083.094.152.165a3.568 3.568 0 011.002 2.238 3.612 3.612 0 012.363-.442c.166.026.302.046.405.06A7.254 7.254 0 0010 14.675zm.457 1.951a9.209 9.209 0 01-2.753.055 19.056 19.056 0 01-.454-.067 1.612 1.612 0 00-1.08.212l-1.904 1.148a.806.806 0 01-.49.117.791.791 0 01-.729-.851l.15-1.781a1.565 1.565 0 00-.439-1.223 5.537 5.537 0 01-.241-.262C1.563 12.855 1 11.473 1 9.979 1 6.235 4.537 3.2 8.9 3.2c4.06 0 7.403 2.627 7.85 6.008 3.372.153 6.05 2.515 6.05 5.406 0 1.193-.456 2.296-1.229 3.19-.051.06-.116.13-.195.21a1.24 1.24 0 00-.356.976l.121 1.423a.635.635 0 01-.59.68.66.66 0 01-.397-.094l-1.543-.917a1.322 1.322 0 00-.874-.169c-.147.023-.27.04-.368.053a7.72 7.72 0 01-.969.062c-2.694 0-4.998-1.408-5.943-3.401zm6.977 1.31a3.325 3.325 0 011.676.174 3.25 3.25 0 01.841-1.502c.05-.05.087-.09.106-.112.489-.565.743-1.213.743-1.883 0-1.804-1.903-3.414-4.4-3.414-2.497 0-4.4 1.61-4.4 3.414s1.903 3.414 4.4 3.414c.241 0 .48-.016.714-.046.08-.01.188-.025.32-.046z"></path>
        </svg>
      </span>
      CONTACTEZ L'ANNONCEUR
    </button>
  </a>
  );
    return (
      <div>
        {this.state.requestStatus ? (
          <div
            className="container  align-items-center"
            style={{ marginTop: "200px" }}
          >
            <div class="spinner-grow text-primary" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-secondary" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-success" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-danger" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-warning" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-info" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-light" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <div class="spinner-grow text-dark" role="status">
              <span class="sr-only">Loading...</span>
            </div> 
            
          
          </div>
        ) : (
          <section id="car-list-area" className="section-padding">
            <div className="container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="car-details-content">
                    <div
                      id="carouselExampleIndicators"
                      className="carousel slide"
                      data-ride="carousel"
                    >
                      <ol className="carousel-indicators">
                        <li
                          data-target="#carouselExampleIndicators"
                          data-slide-to={0}
                          className="active"
                        />
                        <li
                          data-target="#carouselExampleIndicators"
                          data-slide-to={1}
                        />
                        <li
                          data-target="#carouselExampleIndicators"
                          data-slide-to={2}
                        />
                      </ol>
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img
                            className="d-block w-100"
                            style={{ height: "600px" }}
                            src={`http://localhost:8000/storage/${this.state.products.image1}`}
                            alt="First slide"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            className="d-block w-100"
                            style={{ height: "600px" }}
                            src={`http://localhost:8000/storage/${this.state.products.image2}`}
                            alt="Second slide"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            className="d-block w-100"
                            style={{ height: "600px" }}
                            src={`http://localhost:8000/storage/${this.state.products.image3}`}
                            alt="Third slide"
                          />
                        </div>
                      </div>
                      <a
                        className="carousel-control-prev"
                        href="#carouselExampleIndicators"
                        role="button"
                        data-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        />
                        <span className="sr-only">Previous</span>
                      </a>
                      <a
                        className="carousel-control-next"
                        href="#carouselExampleIndicators"
                        role="button"
                        data-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        />
                        <span className="sr-only">Next</span>
                      </a>
                    </div>
                    <div className="car-details-info">
                      <h4>Additional Info</h4>
                      <p>{this.state.products.description}</p>

                      <div className="technical-info">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="tech-info-table">
                              <table className="table table-bordered">
                                <tr>
                                  <th>Marque</th>
                                  <td>{this.state.category}</td>
                                </tr>
                                <tr>
                                  <th>Surface</th>
                                  <td>{this.state.products.surface}m²</td>
                                </tr>
                                <tr>
                                  <th>Nombres de chambres</th>
                                  <td>{this.state.products.chambre}piéces</td>
                                </tr>
                                <tr>
                                  <th>Prix</th>
                                  <td>{this.state.products.prix} Dh</td>
                                </tr>
                                <tr>
                                  <th>Adresse</th>
                                  <td>{this.state.products.adresse}</td>
                                </tr>
                              </table>
                            </div>
                          </div>
                          <div class="col-lg-6"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="sidebar-content-wrap m-t-50">
                    <div className="single-sidebar">
                      <div
                        className="sidebar-body"
                        style={{ marginTop: "50px" }}
                      >
                        <button
                          type="button"
                          class="btn btn-primary buzz-out-on-hover"
                          data-toggle="modal"
                          data-target="#exampleModal"
                          style={{
                            marginLeft: "20px",
                            paddingLeft: "50px",
                            paddingRight: "50px",
                          }}
                        >
                          <span class="sc-AxgMl sc-AxheI keXlru">
                            <svg
                              class="av-icon"
                              height="24"
                              width="24"
                              style={{
                                fill: "currentColor",
                                stroke: "currentColor",
                                strokeWidth: "0",
                              }}
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                              aria-labelledby="PhoneLineTitleID"
                            >
                              <title id="PhoneLineTitleID">
                                PhoneLine Icon
                              </title>
                              <path d="M9.366 10.682a10.556 10.556 0 003.952 3.952l.884-1.238a1 1 0 011.294-.296 11.422 11.422 0 004.583 1.364 1 1 0 01.921.997v4.462a1 1 0 01-.898.995A15.51 15.51 0 0118.5 21C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 014.077 3h4.462a1 1 0 01.997.921A11.422 11.422 0 0010.9 8.504a1 1 0 01-.296 1.294l-1.238.884zm-2.522-.657l1.9-1.357A13.41 13.41 0 017.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 01-3.668-1.097l-1.357 1.9a12.442 12.442 0 01-1.588-.75l-.058-.033a12.556 12.556 0 01-4.702-4.702l-.033-.058a12.442 12.442 0 01-.75-1.588z"></path>
                            </svg>
                          </span>
                          AFFICHER LE NUMERO
                        </button>

                        <div
                          class="modal fade"
                          id="exampleModal"
                          tabindex="-1"
                          role="dialog"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div class="modal-dialog" role="document">
                            <div class="modal-content">
                              <div class="modal-header">
                                <img src="att.png" alt="" />
                              </div>
                              <h5 className="titrepop">Attention !</h5>
                              <p className="par">
                                Il ne faut jamais envoyer de l’argent à l’avance
                                au vendeur <br />
                                par virement bancaire ou à travers une agence de
                                transfert d’argent lors de l’achat des biens
                                disponibles sur le site.
                              </p>
                              <div className="num">
                                <a
                                  href="tel:0622044679"
                                  data-test="av_phoneNumber"
                                  class="h6iqfz-2 fhILua"
                                >
                                  <span class="h6iqfz-3 gmJZmb">
                                    <svg
                                      class="av-icon"
                                      height="24"
                                      width="24"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-labelledby="PhoneLineTitleID"
                                      style={{
                                        fill: "rgb(102, 102, 102)",
                                        stroke: "rgb(102, 102, 102)",
                                        strokeWidth: "0",
                                      }}
                                    >
                                      <title id="PhoneLineTitleID">
                                        PhoneLine Icon
                                      </title>
                                      <path d="M9.366 10.682a10.556 10.556 0 003.952 3.952l.884-1.238a1 1 0 011.294-.296 11.422 11.422 0 004.583 1.364 1 1 0 01.921.997v4.462a1 1 0 01-.898.995A15.51 15.51 0 0118.5 21C9.94 21 3 14.06 3 5.5c0-.538.027-1.072.082-1.602A1 1 0 014.077 3h4.462a1 1 0 01.997.921A11.422 11.422 0 0010.9 8.504a1 1 0 01-.296 1.294l-1.238.884zm-2.522-.657l1.9-1.357A13.41 13.41 0 017.647 5H5.01c-.006.166-.009.333-.009.5C5 12.956 11.044 19 18.5 19c.167 0 .334-.003.5-.01v-2.637a13.41 13.41 0 01-3.668-1.097l-1.357 1.9a12.442 12.442 0 01-1.588-.75l-.058-.033a12.556 12.556 0 01-4.702-4.702l-.033-.058a12.442 12.442 0 01-.75-1.588z"></path>
                                    </svg>
                                    <span>{this.state.user}</span>
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        {localStorage.usertoken ? auth : noauth}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        {/* <ul>
                    <li>{this.state.description}</li>
                    <li>{this.state.prix}</li> 
                    <li>{this.state.product.name}</li>
                    <li>tessssssssssssssssssssssst</li>
                    <li>{this.state.category}</li>
                    <li></li>
                </ul> */}
      </div>
    );
  }
}
