import React, { Component } from "react";
import axios, { post } from "axios";

export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
    };
   
  }
  onChange = (e) => {
    // console.log(e.target.files[0]);
    this.setState({ selectedFile: e.target.files[0] });
  };
  onFormSubmit = (e) => {
  
    e.preventDefault();
    const formData = new FormData();
    formData.append("fileupload", this.state.selectedFile);

    this.fileUpload(formData);
  };
  fileUpload(formData) {
    axios
      .post("http://localhost:8000/api/fileupload", formData, {
        headers: { Authorization: `Bearer ${localStorage.usertoken}` },
      })
      .then((response) => console.log(response));
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <h1>React js Laravel File Upload Tutorial</h1>
        <input type="file" name="fileupload" onChange={this.onChange} />
        <button type="submit">Upload</button>
      </form>
    );
  }
}
