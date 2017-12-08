import React, { Component } from 'react';




import readME_3_2_BuisenessData from '../../sampleJsonData/readME_3_2_BuisenessData'
import readME_3_2_PersonalData from '../../sampleJsonData/readME_3_2_PersonalData'


import Scope from './Scope';
import Flows from './Flows';

import UserType from './UserType';

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

        <UserType key={BUSINESS} str={BUSINESS} obj={readME_3_2_BuisenessData} />
        <UserType key={PERSONAL} str={PERSONAL} obj={readME_3_2_PersonalData} />

      </div>
    );
  }
}
