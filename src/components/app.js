import React, { Component } from 'react';




import readME_3_2_BuisenessData from '../../sampleJsonData/readME_3_2_BuisenessData'
import readME_3_2_PersonalData from '../../sampleJsonData/readME_3_2_PersonalData'


import Scope from './Scope';
import Flows from './Flows';
import Business from './Business';
import Personal from './Personal';

const BUSINESS = 'BUSINESS';
const PERSONAL = 'PERSONAL';

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
        <Personal key={PERSONAL} str={PERSONAL} obj={readME_3_2_PersonalData} />

      </div>
    );
  }
}
