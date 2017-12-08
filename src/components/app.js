import React, { Component } from 'react';



import jsonData from '../../sampleJsonData/flowTestJsonData'
import jsonData2 from '../../sampleJsonData/flowTestJsonData2'


import Flows from './Flows';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }
  

  render() {
    return (
      <div>
        <div className="btn btn-primary" onClick={() => this.setState({ data: jsonData })}>
          Goal Setter Flows Data
        </div>
        <div className="btn btn-secondary" onClick={() => this.setState({ data: jsonData2 })}>
          Multiple From To Data
        </div>
        {/* <DocType> */}
        <Flows
          key='flows'
          val={this.state.data}
        />
        {/* <MORENODE> */}
      </div>
    );
  }
}
