import React, { Component } from 'react';

class AdCarousel extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const images = this.props.images
    var no = 0;
    const caruoselInner = images.map((image) =>
    <div key={no} className={no++==0?"item active":"item"}>
      <img src={image}/>
    </div> );
    no=0;
    const caruoselIndicators = images.map((image) =>
    <li key={no} data-target="#adCarousel" data-slide-to={no} className={no++==0?"active":""}></li>);
    return(
      <div id="adCarousel" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          {caruoselIndicators}
        </ol>
        <div className="carousel-inner">
          {caruoselInner}
        </div>
        <a className="left carousel-control" href="#adCarousel" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="right carousel-control" href="#adCarousel" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default AdCarousel;
