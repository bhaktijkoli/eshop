import React, { Component } from 'react';
import { Link, withRouter  } from 'react-router-dom';

class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list:[]
    }
  }
  componentDidMount() {
    axios.get('/api/user/favorites/get')
    .then(function (response) {
      console.log(response.data);
      this.setState({list:response.data});
    }.bind(this));
  }
  render() {
    var no = 0;
    return(
      <div className="card">
        <div className="card-heading">
          <h3 className="card-title">My Favorites</h3>
          <hr/>
        </div>
        <div className="card-body nopadding">
          <div className="table-responsive">
            <table className="table table-striped ads-list">
              <thead>
                <tr>
                  <th width="20%">Photo</th>
                  <th width="40%">Details</th>
                  <th width="20%">Price</th>
                  <th width="20%">Actions</th>
                </tr>
              </thead>
              <tbody>
                {this.state.list.map((item) =>
                  <tr key={no++}>
                    <td><img src={item.thumb} width="174"/></td>
                    <td>
                      <p className="title">{item.title}</p>
                      <p className="details">Posted: <small>{item.datetime}</small></p>
                      <p className="details">Views: <small>0</small></p>
                    </td>
                    <td><i className="fa fa-inr" aria-hidden="true"></i>&nbsp;{item.price}</td>
                    <td>
                      <Link to={this.getUrl(item.url)} className="btn btn-info btn-sm"><i className="fa fa-eye" aria-hidden="true"></i></Link><br/>
                      <a className="btn btn-danger btn-sm"><i className="fa fa-trash-o" aria-hidden="true"></i></a><br/>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
  getUrl(url) {
    return "/ad/" + url;
  }
}

export default withRouter(Favorites);
