import React, { Component } from 'react';



import jsonData from '../../sampleJsonData/flowTestJsonData'
import jsonData2 from '../../sampleJsonData/flowTestJsonData2'

import goalSetterScope from '../../sampleJsonData/goalSetterScope'
import oneFXScope from '../../sampleJsonData/oneFXScope'
import multiFromTosScope from '../../sampleJsonData/multiFromTosScope'

import readME_3_2_BuisenessData from '../../sampleJsonData/readME_3_2_BuisenessData'


import Scope from './Scope';
import Flows from './Flows';
import Business from './Business';

const BUSINESS = 'BUSINESS'
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
        {/* <Scope obj={goalSetterScope} /> */}
        {/* <Scope obj={oneFXScope} /> */}
        {/* <Scope obj={multiFromTosScope} /> */}
        <Business key={BUSINESS} str={BUSINESS} obj={readME_3_2_BuisenessData} />

      </div>
    );
  }
}
