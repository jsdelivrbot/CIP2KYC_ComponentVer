import React, { Component } from 'react';


import readME_3_2_EntireJson from '../../sampleJsonData/readME_3_2_EntireJson'
import oneFX_EntireJson from '../../sampleJsonData/oneFX_EntireJson'


import Scope from './Scope';
import Flows from './Flows';

import UserType from './UserType';
import CipTag from './CipTag';


export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: {}
    }
  }

  render() {

    let entireJsonObj = readME_3_2_EntireJson.v3;
    // let entireJsonObj = oneFX_EntireJson.v3;
    let jsonProps = Object.keys(entireJsonObj);

    return (
      <div>
        {jsonProps.map((jsonProp, idx) => {
          return (
            <CipTag key={idx} str={jsonProp} obj={entireJsonObj[jsonProp]} />
          );
        })}
      </div>
    );
  }
}
