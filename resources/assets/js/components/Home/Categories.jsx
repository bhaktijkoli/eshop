import React, { Component } from 'react';
import { withRouter  } from 'react-router-dom';

import CategoryBox from './CategoryBox'

class Categories extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    var books = ["Book 1", "Book 2", "Book 3", "Book 4", "Book 5"]
    var instruments = ["Instrument 1", "Instrument 2", "Instrument 3", "Instrument 4", "Instrument 5"]
    var kits = ["Kits 1", "Kits 2", "Kits 3", "Kits 4", "Kits 5"]
    return(
      <div style={{marginTop:'50px'}}>
        <div className="col-sm-4">
          <CategoryBox name="Books" icon="fa fa-book" class="success" items={books}/>
        </div>
        <div className="col-sm-4">
          <CategoryBox name="Instruments" icon="fa fa-tachometer" class="warning" items={instruments}/>
        </div>
        <div className="col-sm-4">
          <CategoryBox name="Kits" icon="fa fa-compass" class="info" items={kits}/>
        </div>
      </div>
    );
  }
}
export default withRouter(Categories);
