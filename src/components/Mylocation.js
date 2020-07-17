import React, { Component } from "react";
import axios, { post } from "axios";
import { Category } from "./CategoryFunctions";

class Mylocation extends Component {
  constructor() {
    super();
    this.state = {
      descripton: "",
      titre: "",
      surface: "",
      prix: "",
      adresse: "",
      disponibilite: "",
      chambre: "",
      selectedFile1: null,
      selectedFile2: null,
      selectedFile3: null,
      category_id: 1,
      user_id: "",
      categories: [],
      images: {},
    };
  }

  onChange = (e) => {
    if (e.target.files) {
      this.setState({
        images: { ...this.state.images, [e.target.name]: e.target.files[0] },
      });
    }
    

    this.setState({ [e.target.name]: e.target.value });
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

    axios
      .post("http://localhost:8000/api/products/store", formData, {
        headers: { Authorization: `Bearer ${localStorage.usertoken}` },
      })
      .then((res) => {
        // console.log("hind", localStorage.usertoken);
        console.log(res);

        this.props.history.push(`/totallocation`);
      });
  };
  componentDidMount() {
    Category().then((res) => {
      console.log(res);
      console.log("didMount");
      this.setState({ categories: res });
    });
  }
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
                                onChange={this.onChange}
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
              >
                {/* <tbody>
                  <tr>
                    <td valign="top" width="50%">
                      <table cellPadding="0" cellSpacing="2">
                        <tbody>
                          <tr>
                            <td className="txtRight" height="26">
                              Locataires&nbsp;recherchés&nbsp;:{" "}
                            </td>
                            <td className="txtLeft">
                              <select name="Etudiant">
                                <option selected="selected">
                                  Tous les locataires
                                </option>
                                <option>Seulement des étudiants</option>
                              </select>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <hr />
                    </td>
                  </tr>
                </tbody> */}
              </table>
            </div>

            <div className="coloc_sep"></div>
            {/* <div className="coloc_recap_zone fl noborder">
					<div className="coloc_title"><i class="fa fa-map-marker" aria-hidden="true" style={{color: "#38bc27"}}></i> Ville où se trouve votre location :</div>
					<input type="hidden" name="OuVille" value=""/>
					<input type="hidden" name="OuInsee" value=""/>
					<input type="hidden" name="OuZip" value=""/>
					<input type="hidden" name="OuCps" value="" disabled="disabled"/>
					<input type="hidden" name="OuPopulation" value="" disabled="disabled"/>
					<input type="hidden" name="min_x" value="" disabled="disabled"/>
					<input type="hidden" name="max_x" value="" disabled="disabled"/>
					<input type="hidden" name="min_y" value="" disabled="disabled"/>
					<input type="hidden" name="max_y" value="" disabled="disabled"/>
					<input type="text" id="editVille" name="uiVille" value=""  style={{width:"250px"}} placeholder="Ville ou code postal"  />
									</div>	 */}

            <div className="coloc_sep"></div>
            <hr />
            {/* <a href="/detail" className="bigcta">Enregistrer</a> */}
            <button type="submit" className="bigcta">
              Enregistrer
            </button>
          </div>
        </form>
      </section>
      // 		<form onSubmit={this.onSubmit}>
      // 		<table className="centered bg-white " cellPadding="0" cellSpacing="8" align="center">
      // 		  <tbody>
      // 			  <tr>
      // 				  <td className="txtright">slug: </td>
      // 				  <td className="txtleft"><input type="text" className="owner_text" name="slug"  maxlength="128" size="20" onChange={this.onChange}/></td>
      // 			  </tr>
      // 			   <tr>
      // 				   <td className="txtright">Email : </td>
      // 				   <td className="txtleft"><input type="text" className="owner_text" name="category_id"  maxlength="128" size="20" onChange={this.onChange} /></td>
      // 			   </tr>
      // 				<tr>
      // 				   <td className="txtright">Choisissez un mot de passe : </td>
      // 				   <td className="txtleft"><input type="prix" className="owner_text" name="password"  maxlength="64" size="20" onChange={this.onChange} /></td>
      // 			   </tr>
      // 			   <tr>
      // 				  <td className="txtright">Saisissez ce mot de passe à nouveau&nbsp;: </td>
      // 				  <td className="txtleft"><input type="c_password" className="owner_text" name="c_password"  maxlength="64" size="20" onChange={this.onChange} /></td>
      // 			   </tr>
      // 			   <tr>
      // 				   <td className="txtcenter" colspan="2">
      // 				   <input id="infos" type="checkbox" name="Infos" value="2"/><label for="infos">&nbsp;Je souhaite bénéficier d'informations pratiques réservées aux bailleurs particuliers</label>
      // 				  </td>
      // 			   </tr>
      // 	  </tbody>
      // 	  </table>

      // 	  <div id="conditionutilisation" className="bg-vert-light ptm pbs">
      //    <h4 className="txtcenter">Conditions d'utilisation</h4>
      //    <p className="txtcenter txtVert">Je reconnais ne pas travailler pour un professionnel de l'immobilier (agence, marchand de liste, notaire, ...)</p>
      //    <p className="txtcenter txtVert">Je reconnais ne contacter les locataires que pour leur proposer une location sans frais d'intermédiaires</p>
      //    <p className="txtcenter txtVert">Je m'engage à ne pas proposer de locations saisonnières ou de vacances</p>
      //    <div className="txtcenter txtBold txtVertt"><input id="Accept" type="checkbox" name="Accept" /><label for="Accept">&nbsp;J'accepte les conditions d'utilisation et la notice légale</label>
      //    </div>
      // 	</div>
      // 	  <div className="txtcenter  di">
      // <button type="submit" className="cta cta-vert prl pll  pbs">Créer mon Espace Propriétaire</button>

      // </div>

      // </form>
    );
  }
}
export default Mylocation;
