import React, { Component } from "react";

import axios from "axios";
import {BootstrapTable, 
  TableHeaderColumn} from 'react-bootstrap-table';

//import Button from 'react-bootstrap/lib/Button';  
import '../../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css';
//import './MyTable.css';




class TableWithData extends Component {
  // default state object

constructor(props){
super(props);
  this.state = {
    Shipments: []
  };

}



onClickProductSelected(cell, row, rowIndex){
  console.log('Shipment #', row.SSCC);
  const id=row.SSCC;
  var newShipment = {};

  axios.get("http://13.126.150.151:3000/api/Shipment/"+id)
  .then(resp=>
    {
      newShipment = resp.data;
      console.log("StatebyId  ",newShipment );
      newShipment.status="RECEIVED";
      console.log("StatebyId  ",newShipment );
      axios.put("http://13.126.150.151:3000/api/Shipment/"+id, newShipment)
      .then(res => console.log(res.data));

    });
 }

 cellButton(cell, row, enumObject, rowIndex) {
   return (
      <button 
         type="button" 
         id="btnn"
         className="btn btn-primary"
         disabled={row.status !== "IN_TRANSIT"}
         onClick={() => 
         this.onClickProductSelected(cell, row, rowIndex)}
      >
      Change
      </button>
   )
}


  

  componentDidMount() {
    axios
      .get("http://13.126.150.151:3000/api/Shipment")
      .then(response => {
        const shipments = response.data.map(c => {
          return {
            SSCC: c.SSCC,
            status: c.status
          };
        });

        // create a new "state" object without mutating
        // the original state object.
        const newState = Object.assign({}, this.state, {
          Shipments: shipments
        });

        // store the new state object in the component's state
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
      <BootstrapTable data={this.state.Shipments} striped={true}>
        <TableHeaderColumn isKey dataField='SSCC' dataAlign="center">
        SSCC
        </TableHeaderColumn>
        <TableHeaderColumn dataField='status' dataAlign="center">
       Status
        </TableHeaderColumn>
        <TableHeaderColumn dataField='button' dataFormat={this.cellButton.bind(this)}>
       Change Status
        </TableHeaderColumn>
        
      </BootstrapTable>
    </div>
    );
  }
}



export default TableWithData;