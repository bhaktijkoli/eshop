import React, { Component } from 'react';
import { withRouter  } from 'react-router-dom';

class Tips extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    $.material.init();
  }
  render() {
    return(
      <div className="content-wrapper">
        <div className="container">
          <div className="col-sm-9">
            <div className="card">
              <div className="card-heading">
                <h3 className="card-title">Tips for buyers</h3>
                <hr/>
              </div>
              <div className="card-body">
                <ul className="list">
                  <li>Meet the seller inside the campus and inspect the item carefully, before purchasing, to keep yourself away from any of the frauds.</li>
                  <li>The best way to transact is to collect the item and pay at the same time. Try not to schedule the payments for later.</li>
                  <li>Always insist on getting clear information about the various aspects of the item, you are going to buy. For example, condition of the item, usage period of the item, etc.</li>
                  <li>Always transact in a way, you feel is the best suitable for you. Never ever, give out your financial information. It may be too risky to do so.</li>
                  <li>Always purchase the item, directly from the seller and make sure, that no third person is involved in between, who may cost you extra charges.</li>
                  <li>Do proper research and always compare the prices and features of the product, you wish to buy. Get the best for yourself.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-9">
            <div className="card">
              <div className="card-heading">
                <h3 className="card-title">Tips for sellers</h3>
                <hr/>
              </div>
              <div className="card-body">
                <ul className="list">
                  <li>Add a title, appropriate to the product which you wish to put on sale. It should cover the gist of the description.</li>
                  <li>Add a suitable description, covering the much of the details about the product, which you wish to sell. For instance, “Is the product first hand or second hand?”, “For how long the product is used, before it is sold here?”, etc.</li>
                  <li>Select a suitable category of your product. Don’t miscategorise the product, you wish to sell.</li>
                  <li>Add an appropriate price to the product you wish to sell, and select wisely, if you wish to keep it negotiable or not.</li>
                  <li>Add upto 4 images, which gives proper description about the product you wish to sell. Make sure that the images uploaded are not of poor quality, and are recognisable enough to buyers.</li>
                  <li>Special care has to be taken while uploading the first image, as it will be the image featuring the product you wish to sell. Please do take care of not uploading images of poor quality.</li>
                  <li>Image size must be around 1MB and must be of decent quality, enough to give a perception about the product you wish to sell.</li>
                  <li>Before submitting, make sure to accept all the terms and conditions of the Eshop, so that you can submit the advertisement of the product you wish to sell.</li>
                  <li>Once you hit the submit button, just sit back and relax. Your advertisement will be verified by one of our executives and then, it will proceed to the website, visible to all the buyers around.</li>
                  <li>Make sure to enter all the details properly and precisely, as every advertisement will undergo a verification before getting posted. If it violates any of the Terms and Conditions, it won’t proceed to get posted. Hence, make sure to read all the details carefully.</li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Tips);
