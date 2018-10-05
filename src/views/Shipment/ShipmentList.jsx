import React, { Component } from "react";
import axios from "axios";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};



class AllShipments extends Component {
    // default state object
    state = {
      Shipments: []
    };
  
    componentDidMount() {
      axios
        .get("http://13.126.150.151:3000/api/Shipment")
        .then(response => {          
          const shipments = response.data.map(c => {
            return [
                 c.SSCC,
                 c.status
            ];
          });
  
          // create a new "state" object without mutating
          // the original state object.
          const newState = Object.assign({}, {
            Shipments: shipments
          });
          // store the new state object in the component's state
          this.setState({Shipments: newState.Shipments});
        })
        .catch(error => console.log(error));
    }
  
    render() {
      const { classes } = this.props;
      return (
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary">
                <h4 className={classes.cardTitleWhite}>All Shipments</h4>
                {/* <p className={classes.cardCategoryWhite}>
                  Here is a subtitle for this table
                </p> */}
              </CardHeader>
              <CardBody>
                <Table
                  tableHeaderColor="primary"
                  tableHead={["SSCC", "Status"]}
                  tableData={this.state.Shipments}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      );
    }
  }

export default withStyles(styles)(AllShipments);;