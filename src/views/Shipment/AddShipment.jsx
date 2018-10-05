import React, {Component} from "react";
import axios from "axios";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";



const styles = {
    cardCategoryWhite: {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    cardTitleWhite: {
      color: "#FFFFFF",
      marginTop: "0px",
      minHeight: "auto",
      fontWeight: "300",
      fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
      marginBottom: "3px",
      textDecoration: "none"
    }
};


class MyShipment extends Component {

    constructor(props) {
        super(props);
        
        // this.onChangeProductIds = this.onChangeProductIds.bind(this);
        // this.onChangePalletIds = this.onChangePalletIds.bind(this);
        //this.onChangeLot = this.onChangeLot.bind(this);
        this.onChangeSSCC = this.onChangeSSCC.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            SSCC: '',
            status: 'SOURCE',
            lotIds:[],
            productIds: [],
            palletIds: []
        }
    }
    
    onChangeSSCC(e) {
        this.setState({
            SSCC: e.target.value
        });
    }

    // onChangeLot(e) {
    //     this.setState({
    //         SSCC: e.target.value
    //     });
    // }


    // handleLotIdChange(event,index) {
    //     var lotIds = this.state.lotIds.slice(); // Make a copy of the emails first.
    //     lotIds[index] = event.target.value; // Update it with the modified email.
    //     this.setState({lotIds: lotIds}); // Update the state.
    // }


    // onChangeProductIds(e) {
       
    // }

    // onChangePalletIds(e) {
        
    // }
    
    
    onSubmit(e) {
        e.preventDefault();
        const newData = {
            SSCC: this.state.SSCC,
            status: this.state.status,
            lotIds:this.state.lotIds,
            productIds: this.state.productIds,
            palletIds: this.state.palletIds
        }
        axios.post('http://13.126.150.151:3000/api/Shipment', newData)
        .then(res => console.log(res.data));
        console.log("PostData: "+this.state);
        this.setState({
            SSCC: ''
        });
    }

    render() {
        const { classes } = this.props;
        return (
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                        <Card>
                            <CardHeader color="primary">
                            <h4 className={classes.cardTitleWhite}>Add Drug</h4>
                            </CardHeader>
                            <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={3}>
                                <CustomInput
                                    value={this.state.SSCC}
                                    onChange={this.onChangeSSCC}
                                    labelText="SSCC"
                                    id="SSCC"
                                    formControlProps={{
                                    fullWidth: true
                                    }}
                                />
                                </GridItem>
                            </GridContainer>
                            </CardBody>
                            <CardFooter>
                            <Button color="primary" onClick={this.onSubmit}>Add</Button>
                            </CardFooter>
                        </Card>
                        </GridItem>
                    </GridContainer>
        )
    }

}


export default withStyles(styles)(MyShipment);;