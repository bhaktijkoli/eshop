import React, { Component } from 'react';
import { withRouter  } from 'react-router-dom';
import { connect } from "react-redux"

import UploadImage from './UploadImage'

let comp = null;

class FormNewAd extends Component {
  constructor(props) {
    super(props);
    comp = this;
  }
  componentDidMount() {
    $('#category').select2({
      theme: "bootstrap"
    });
    this.callValidate();
  }
  render() {
    var auth = this.props.auth;
    var categories = this.props.category.categories;
    var categoryLsit = categories.map((category) =>
    <option value={category.id} key={category.id}>
      {category.name}
    </option>  );
    return (
      <div className="card">
        <div className="card-heading">
          <h3 className="card-title">Post an ad</h3>
          <hr/>
        </div>
        <div className="card-body">
          <div className="row">
            <form id="form_additem" encType="multipart/form-data">
            <div className="col-sm-10">
              Add information about your item below. Your ad will not appear in search results until this information has been verified and approved by our moderators.
              <br/>
              <br/>
            </div>
            <div className="col-sm-10">
              <div className="form-group label-floating">
                <label className="control-label" htmlFor="title">Ad title</label>
                <input type="text" className="form-control" id="title" name="title"/>
                <p className="help-block">Write a suitable title for your ad.</p>
              </div>
            </div>
            <div className="col-sm-10">
              <div className="form-group label-floating">
                <label className="control-label" htmlFor="description">Ad description</label>
                <textarea className="form-control" id="description" name="description" rows="6"></textarea>
                <p className="help-block">Describe your ad.</p>
              </div>
            </div>
            <div className="col-sm-10">
              <div className="form-group">
                <label className="control-label" htmlFor="category">Select category</label>
                <select className="form-control" placeholder="Category" id="category" name="category">
                  {categoryLsit}
                </select>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="fa fa-inr"></i>
                </span>
                <input type="number" className="form-control" id="price" name="price" placeholder="Price"/>
                <p className="help-block"></p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group">
                <div className="checkbox">
                  <label>
                    <input type="checkbox" id="negotiable" name="negotiable"/>
                    Negotiable
                  </label>
                </div>
              </div>
            </div>
            <br/>
            <div className="col-sm-10 form-break">
              <h4>Add Images</h4>
            </div>
            <div className="col-sm-10">
              <p>Upload your featured image below.</p>
              <UploadImage name="image1"/>
            </div>
            <div className="col-sm-10">
              <UploadImage  name="image2"/>
            </div>
            <div className="col-sm-10">
              <UploadImage  name="image3"/>
            </div>
            <div className="col-sm-10">
              <UploadImage  name="image4"/>
            </div>
            <div className="col-sm-10">
              <div className="form-group">
                <div className="checkbox">
                  <label>
                    <input type="checkbox" id="accept_terms" name="accept_terms"/>
                    I agree to the Terms of Service
                  </label>
                </div>
                <p className="help-block"></p>
              </div>
            </div>
            <div className="col-sm-10">
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-lg btn-wide">Submit</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
callValidate() {
  $("#form_additem").validate({

    rules:
    {
      title: {
        required: true
      },
      category: {
        required: true
      },
      price: {
        required: true
      },
      description: {
        required: true
      },
      accept_terms: {
        required: true
      },
      image1: {
        required: true
      },
    },
    messages:
    {
      title: {
        required: "Title is required."
      },
      category: {
        required: "Category is required."
      },
      price:{
        required: "Price is required.",
      },
      description: {
        required: "Description is required."
      },
      image1: {
        required: "Featured image is required."
      },
      accept_terms:{
        required: "You must accept the Terms of Service."
      }
    },
    errorPlacement : function(error, element) {
      fh.set_error(element, error.html());
    },
    unhighlight: function(element, errorClass, validClass) {
      fh.remove_error(element);
    },
    submitHandler: function(form) {
      var form = event.target;
      fh.hide_button();
      axios.post("/api/items/add", new FormData(form))
      .then(function (response) {
        var data = response.data;
        console.log(data);
        if(fh.is_success(data)) {
          comp.props.history.push("/");
        }
        else {
          fh.set_multierrors(data);
        }
        fh.show_button();
      })
      .catch(function (error) {
        fh.show_errorpage(error);
      });
    }
  });
}
}



function mapStateToProps(state) {
  return {
    auth: state.auth,
    category: state.category
  };
}

export default withRouter(connect(mapStateToProps)(FormNewAd));
