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
      disponibilite: "1",
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

        // this.props.history.push(`/totallocation`);
      });
      this.props.history.push(`/totallocation`);
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
      <section id="CreationLocation" className="bg-prim pts col-lg-12 ">
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
              >
                <div className="coloc_title" style={{fontSize:"30px"}}>
                  {" "}
                  <i
                    className="fa fa-home"
                    aria-hidden="true"
                    style={{ color: "#38bc27" , }}
                  ></i>{" "}
                  Votre location :
                </div>

                <table cellPadding="0" cellSpacing="2" className="pt">
                  <tbody>
                    <tr>
                      <td className="txtRight" height="26">
                      <label for="exampleFormControlSelect1" style={{marginRight:"40px"}}>Logement proposé :</label>
                      </td>
                      <td className="txtLeft">
                      <div class="form-group">
             
    <select class="form-control"  onChange={this.onChange} style={{marginBottom:"10px"}}  name="category_id" >
    {this.state.categories.map((category, i) => (
                            <option value={category.id} key={i}>
                              {category.name}
                            </option>
                          ))}
    </select>
  </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="txtRight" height="26">
                        Titre:{" "}
                      </td>
                      <td className="txtLeft">
                      <input type="text"   onChange={this.onChange}   name="titre"  style={{marginBottom:"20px"}} className="form-control" id="exampleInputEmail1"/>
                      </td>
                    </tr>
                    <tr>
                      <td className="txtRight" height="26">
                        Description :{" "}
                      </td>
                      <td className="txtLeft">
                      <input type="text"   onChange={this.onChange} style={{marginBottom:"20px"}}  name="description" className="form-control" id="exampleInputEmail1"/>

                      </td>
                    </tr>
                    {/* <tr>
                      <td className="txtRight" height="26">
                        Disponibilité :{" "}
                      </td>
                      <td className="txtLeft">
                      <input type="text"   onChange={this.onChange} style={{marginBottom:"20px"}}  name="disponibilite" className="form-control" id="exampleInputEmail1"/>
                      </td>

                  
                    </tr> */}
                    <tr>
                      <td id="response"></td>
                    </tr>

                    <tr>
                      <td className="txtRight" height="26">
                        Nombre chambre :{" "}
                      </td>
                      <td className="txtLeft">
                      <input type="text"   onChange={this.onChange} style={{marginBottom:"20px"}}  name="chambre" className="form-control" id="exampleInputEmail1"/>

                      </td>
                    </tr>

                    <tr>
                      <td className="txtRight" height="26">
                        Image1 :{" "}
                      </td>
                      <td className="txtLeft">
                      <div class="custom-file">
  <input type="file" className="custom-file-input" name="image1" style={{marginBottom:"20px"}} onChange={this.onChange}  />
  <label className="custom-file-label" for="customFileLang">Selecionner un fichier</label>
</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="txtRight" height="26">
                        Image2 :{" "}
                      </td>
                      <td className="txtLeft">
                      <div class="custom-file">
  <input type="file" className="custom-file-input" name="image2" style={{marginBottom:"20px"}} onChange={this.onChange}  />
  <label className="custom-file-label" for="customFileLang">Selecionner un fichier</label>
</div>
                      </td>
                    </tr>
                    <tr>
                      <td className="txtRight" height="26">
                        Image 3:{" "}
                      </td>
                      <td className="txtLeft">
                        {/* <input
                          type="file"
                          onChange={this.onChange}
                          name="image3"
                          placeholder=""
                          maxLength="10"
                          className="datepicker w2 hasDatepicker"
                          style={{ verticalAlign: "top" }}
                        /> */}
                        <div class="custom-file">
  <input type="file" className="custom-file-input" name="image3"  onChange={this.onChange}  />
  <label className="custom-file-label" for="customFileLang">Selecionner un fichier</label>
</div>
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
                    <td className="txtRight" >
                      Loyer + charges mensuels :
                    </td>
                    <td className="txtLeft">
                      <table cellPadding="0" cellSpacing="0" align="left">
                        <tbody>
                          <tr>
                            <td className="txtLeft">
                      <input type="text"   onChange={this.onChange} style={{marginBottom:"10px"}}  name="prix" className="form-control" id="exampleInputEmail1"/>
                              
                            </td>
                            <td className="txtLeft">&nbsp;€</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td className="txtRight" id="Superficie" >
                      Superficie de votre logement :&nbsp;
                    </td>
                    <td className="txtLeft">
                    <input type="text"   onChange={this.onChange} style={{marginBottom:"20px"}}  name="surface" className="form-control" id="exampleInputEmail1"/>
          
                    </td>
                    <td className="txtLeft">  m²</td>
                  </tr>
                  <tr>
                    <td className="txtRight" >
                      Adresse :{" "}
                    </td>
                    <td className="txtLeft">
                    <input type="text"   onChange={this.onChange} style={{marginBottom:"20px"}}  name="adresse" className="form-control" id="exampleInputEmail1"/>
                     
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
               
              </table>
            </div>

            <div className="coloc_sep"></div>
            

            <div className="coloc_sep"></div>
            <hr />
            {/* <a href="/detail" className="bigcta">Enregistrer</a> */}
            <button type="submit" className="bigcta">
              Enregistrer
            </button>
          </div>
        </form>
      </section>
     );
  }
}
export default Mylocation;
