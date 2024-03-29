import React, { Component } from 'react';
import { Route, withRouter, Link } from 'react-router-dom';

class Ad extends Component {
  constructor(props) {
    super(props);
    this.state={itemClass:'hidden',favorite:this.props.favorite};
  }
  componentDidMount() {
    $.material.init();
    setTimeout(function () {
      this.setState({itemClass:'item animated fadeInDown'});
    }.bind(this),100*this.props.item_id);
  }

  render() {
    return (
      <div className={this.state.itemClass}>
        <div className="col-sm-2">
          <div className="thumb">
            <a href={this.props.image} data-fancybox={this.props.item_id} data-caption={this.props.title}>
              <img src={this.props.thumb} width="150"/>
            </a>
          </div>
        </div>
        <div className="col-sm-9">
          <div className="content">
            <h4><Link to={this.getUrl()} className="title">{this.props.title}</Link> <span className="label label-primary">{this.props.category}</span></h4>
            <p className="content-body">{this.props.description}</p>
            <hr/>
            <div className="item-footer">
              <small><i className="fa fa-clock-o" aria-hidden="true">&nbsp;</i>{this.props.datetime}</small>
              <div className="action">
                <a onClick={this.handleFavorite.bind(this)} className={this.state.favorite==1?"btn btn-xs btn-round btn-fav":"btn btn-xs btn-round btn-white"}><i className={this.state.favorite==1?"fa fa-heart":"fa fa-heart-o"} aria-hidden="true"></i></a>
                <Link to={this.getUrl()} className="btn btn-info btn-xs btn-round">Details</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-1">
          <h4><i className="fa fa-inr" aria-hidden="true"></i>&nbsp;{this.props.price}</h4>
          {this.printNegotiable()}
        </div>
      </div>
    );
  }
  printNegotiable() {
    if(this.props.negotiable == 1) {
      return  <span><i className="fa fa-check" aria-hidden="true"></i>Negotiable</span>
    }
    else {
      return <span></span>;
    }
  }
  getUrl() {
    return "/ad/" + this.props.url;
  }
  handleFavorite()
  {
    if(this.props.auth == 1) {
      axios.post('/api/user/favorite/toggle', {id:this.props.item_id})
      this.setState({favorite:!this.state.favorite});
    } else {
      this.props.history.push('/login');
    }
  }
}

export default withRouter(Ad);
