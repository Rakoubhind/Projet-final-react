import React, { Component } from "react";
import axios from "axios";
import { Category } from "./CategoryFunctions";

class Edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      descripton: "",
      titre: "",
      surface: "",
      prix: "",
      adresse: "",
      disponibilite: "1",
      chambre: "",
      image1: "",
      image2: "",
      image3: "",
      category_id: 1,
      user_id: "",
      categories: [],
      images: {},
    };
    // this.onChange = this.onChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }
  componentDidMount() {
    axios
      .get(
        "http://localhost:8000/api/products/edit/" + this.props.match.params.id
      )
      // {  headers: { Authorization: `Bearer ${localStorage.usertoken}` },})

      .then((res) => {
        console.log(res);
        console.log(res.data.titre);
        // this.props.history.push(`/totallocation`)
        this.setState({
          titre: res.data.titre,
          description: res.data.description,
          surface: res.data.surface,
          prix: res.data.prix,
          // disponibilite: res.data.disponibilite,
          chambre: res.data.chambre,
          category_id: res.data.category_id,
          adresse: res.data.adresse,
          images: {
            image1: res.data.image1,
            image2: res.data.image2,
            image3: res.data.image3,
          },
        });
      });
    Category().then((res) => {
      console.log(res);
      console.log("didMount");
      this.setState({ categories: res });
    });
  }
  onChange = (e) => {
    if (e.target.files) {
      this.setState({
        images: { ...this.state.images, [e.target.name]: e.target.files[0] },
      });
    }
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.images);
  };
  onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("image1", this.state.images.image1);
    formData.append("image2", this.state.images.image2);
    formData.append("image3", this.state.images.image3);
    formData.append("titre", this.state.titre);
    formData.append("description", this.state.description);
    formData.append("surface", this.state.surface);
    formData.append("prix", this.state.prix);
    formData.append("chambre", this.state.chambre);
    formData.append("disponibilite", this.state.disponibilite);
    formData.append("category_id", this.state.category_id);
    formData.append("adresse", this.state.adresse);

    // const product = {
    //   titre: this.state.titre,
    //   description: this.state.description,
    //   surface: this.state.surface,
    //   prix: this.state.prix,
    //   disponibilite: this.state.disponibilite,
    //   chambre: this.state.chambre,
    //   //   image1: this.state.image1,
    //   //   image2: this.state.image2,
    //   //   image3: this.state.image3,
    //   category_id: this.state.category_id,
    //   adresse: this.state.adresse,

    //   // user_id: this.state.user_id,
    // };
    // console.log(localStorage.usertoken)
    axios
      .post(
        "http://localhost:8000/api/products/update/" +
          this.props.match.params.id,
        formData , {
          headers: { Authorization: `Bearer ${localStorage.usertoken}` },
        })
      
      .then((response) => {
        console.log(response);
        this.props.history.push(`/totallocation`);
      });
  };
  //   componentDidMount() {
  //     Category().then((res) => {
  //       console.log(res);
  //       console.log("didMount");
  //       this.setState({ categories: res });
  //     });
  //   }
  render() {
    return (
      <section id="CreationLocation" className="bg-prim pts ">
        <form onSubmit={this.onSubmit}>
          <div className="widthMax center bg-white pbs">
            <div id="introcoach3">
              <div className="coach_text ptl pbl">
                <h3 className="h1_recap" style={{ color: "#38bc27" }}>
                  Création de votre location
                </h3>
                <p>
                  Merci de définir les caractéristiques du logement ainsi que
                  les profils recherchés.
                </p>
              </div>
              <hr />
              <div className="clearfix"></div>
            </div>
            <div className="coloc_sep"></div>
            <div className="d-flex">
              <div
                className="coloc_recap_zone fl noborder"
                style={{ minWidth: "50%" }}
              >
                <div className="coloc_title">
                  {" "}
                  <i
                    className="fa fa-home"
                    aria-hidden="true"
                    style={{ color: "#38bc27" }}
                  ></i>{" "}
                  Votre location :
                </div>

                <table cellPadding="0" cellSpacing="2" className="pt">
                  <tbody>
                    <tr>
                      <td className="txtRight" height="26">
                        Logement proposé :
                      </td>
                      <td className="txtLeft">
                        <select
                          name="RdoLogement"
                          onChange={this.onChange}
                          name="category_id"
                        >
                          {this.state.categories.map((category, i) => (
                            <option value={category.id} key={i}>
                              {category.name}
                            </option>
                          ))}
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td className="txtRight" height="26">
                        Titre:{" "}
                      </td>
                      <td className="txtLeft">
                        <input
                          type="text"
                          onChange={this.onChange}
                          value={this.state.titre}
                          name="titre"
                          placeholder=""
                          maxLength="10"
                          className="datepicker w2 hasDatepicker"
                          style={{ verticalAlign: "top" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="txtRight" height="26">
                        Description :{" "}
                      </td>
                      <td className="txtLeft">
                        <input
                          type="text"
                          onChange={this.onChange}
                          name="description"
                          value={this.state.description}
                          placeholder=""
                          maxLength="10"
                          className="datepicker w2 hasDatepicker"
                          style={{ verticalAlign: "top" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="txtRight" height="26">
                        Disponibilité :{" "}
                      </td>
                      <td className="txtLeft">
                        <input
                          type="text"
                          onChange={this.onChange}
                          value={this.state.disponibilite}
                          name="disponibilite"
                          placeholder=""
                          maxLength="10"
                          className="datepicker w2 hasDatepicker"
                          style={{ verticalAlign: "top" }}
                        />
                      </td>

                      {/* <tr>
								<ul>
									{this.state.categories.map((category)=><li>{category.name}</li>)}
								</ul>
							</tr> */}
                    </tr>
                    <tr>
                      <td id="response"></td>
                    </tr>

                    <tr>
                      <td className="txtRight" height="26">
                        Nombre chambre :{" "}
                      </td>
                      <td className="txtLeft">
                        <input
                          type="text"
                          onChange={this.onChange}
                          name="chambre"
                          value={this.state.chambre}
                          placeholder=""
                          maxLength="10"
                          className="datepicker w2 hasDatepicker"
                          style={{ verticalAlign: "top" }}
                        />
                      </td>
                    </tr>

                    <tr>
                      <td className="txtRight" height="26">
                        Image1 :{" "}
                      </td>
                      <td className="txtLeft">
                        <input
                          type="file"
                          onChange={this.onChange}
                          name="image1"
                          //   value={this.state.image1}
                          placeholder=""
                          maxLength="10"
                          className="datepicker w2 hasDatepicker"
                          style={{ verticalAlign: "top" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="txtRight" height="26">
                        Image2 :{" "}
                      </td>
                      <td className="txtLeft">
                        <input
                          type="file"
                          onChange={this.onChange}
                          //   value={this.state.image2}
                          name="image2"
                          placeholder=""
                          maxLength="10"
                          className="datepicker w2 hasDatepicker"
                          style={{ verticalAlign: "top" }}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td className="txtRight" height="26">
                        Image 3:{" "}
                      </td>
                      <td className="txtLeft">
                        <input
                          type="file"
                          onChange={this.onChange}
                          //   value={this.state.image3}
                          name="image3"
                          placeholder=""
                          maxLength="10"
                          className="datepicker w2 hasDatepicker"
                          style={{ verticalAlign: "top" }}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="coloc_recap_zone fl noborder">
              <div className="coloc_title">&nbsp;</div>
              <table cellPadding="0" cellSpacing="2" className="pt">
                <tbody>
                  <tr>
                    <td className="txtRight" height="26">
                      Loyer + charges mensuels :
                    </td>
                    <td className="txtLeft">
                      <table cellPadding="0" cellSpacing="0" align="left">
                        <tbody>
                          <tr>
                            <td className="txtLeft">
                              <input
                                type="text"
                                name="prix"
                                // onChange={this.onChange}
                                value={this.state.prix}
                                maxLength="5"
                                className="w2"
                                style={{ width: "40px" }}
                              />
                            </td>
                            <td className="txtLeft">&nbsp;€</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td className="txtRight" id="Superficie" height="26">
                      Superficie de votre logement :&nbsp;
                    </td>
                    <td className="txtLeft">
                      <input
                        type="text"
                        name="surface"
                        onChange={this.onChange}
                        value={this.state.surface}
                        maxLength="4"
                        className="w2"
                        style={{ width: "40px" }}
                      />{" "}
                      m²
                    </td>
                  </tr>
                  <tr>
                    <td className="txtRight" height="26">
                      Adresse :{" "}
                    </td>
                    <td className="txtLeft">
                      <input
                        type="text"
                        onChange={this.onChange}
                        value={this.state.adresse}
                        name="adresse"
                        placeholder=""
                        maxLength="10"
                        className="datepicker w2 hasDatepicker"
                        style={{ verticalAlign: "top" }}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="clear"></div>
            <hr />
            <div className="coloc_sep"></div>
            <div className="coloc_recap_zone">
              {/* <div className="coloc_title">
                <i className="fa fa-user" style={{ color: "#38bc27" }}></i>
                Profils recherchés :
              </div> */}
              <table
                id="TableProfils"
                cellPadding="0"
                cellSpacing=""
                width="100%"
              ></table>
            </div>

            <div className="coloc_sep"></div>
            <div className="coloc_sep"></div>
            <hr />
            <button type="submit" className="bigcta">
              Enregistrer
            </button>
          </div>
        </form>
      </section>
    );
  }
}
export default Edit;
