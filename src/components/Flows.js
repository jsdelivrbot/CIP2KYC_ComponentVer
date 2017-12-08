import React, { Component } from 'react';

export default class Flows extends Component {
  // assuming
  // this.props.key = 'flows'
  // this.props.val = objKeysAreFromNodeName
  // objKeysAreFromNodeName ex)
  // keys aer from node ex) ACH-US
  // vals are to nodes objs ex) {ACH_US : ~~ }, SYNAPSE-US

  render() {
    let objKeysAreFromNodeName;
    let fromNodeNames;
    if (this.props.val) {
      objKeysAreFromNodeName = this.props.val;
      fromNodeNames = Object.keys(objKeysAreFromNodeName);
    }
    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>From</th>
            <th>To</th>
            <th>Daily</th>
            <th>Weekly</th>
            <th>Monthly</th>
            <th>Yearly</th>
          </tr>
        </thead>
        <tbody>
          {fromNodeNames.map(fromNodeName => {
            let objKeysAreToNodeNames = objKeysAreFromNodeName[fromNodeName];
            let toNodeNames = Object.keys(objKeysAreToNodeNames);
            return (
              toNodeNames.map((toNodeName) => {
                let objKeysAreToNodeProps = objKeysAreToNodeNames[toNodeName];
                return (
                  <tr key={idx}>
                    <td>{fromNodeName}</td>
                    <td>{toNodeName}</td>
                    <td>{objKeysAreToNodeProps.daily_limit}</td>
                    <td>{objKeysAreToNodeProps.weekly_limit}</td>
                    <td>{objKeysAreToNodeProps.monthly_limit}</td>
                    <td>{objKeysAreToNodeProps.yearly_limit}</td>
                  </tr>
                );
              })
            );
          })}
        </tbody>
      </table>
    );
  }
}
