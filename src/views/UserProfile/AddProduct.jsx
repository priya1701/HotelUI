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


class MyForm extends Component {

    constructor(props) {
        super(props);
        this.onChangeGuestId = this.onChangeGuestId.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeCheckIn = this.onChangeCheckIn.bind(this);
        this.onChangeCheckOut = this.onChangeCheckOut.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            guestId:'',
            name:'',
            type:'',
            checkIn:'',
            checkOut:'',
            hotel:'KrishnaOberoi'
        }
    }
    onChangeGuestId(e) {
        this.setState({
            guestId: e.target.value
        });
    }
    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }
    onChangeType(e) {
        this.setState({
            type: e.target.value
        });
    }
    onChangeCheckIn(e) {
        this.setState({
            checkIn: e.target.value
        });
    }
    onChangeCheckOut(e) {
        this.setState({
            checkOut: e.target.value
        });
    }
    
    
    onSubmit(e) {
        e.preventDefault();
        const newData = {
            guestId: this.state.guestId,
            name: this.state.name,
            type: this.state.type,
            checkIn: this.state.checkIn,
            checkOut: this.state.checkOut,
            hotel:this.state.hotel
        }
        axios.post('http://138.68.51.48:3000/api/guest', newData)
        .then(res => console.log(res.data));
        //console.log("PostData: "+this.state);
        this.setState({
            guestId:'',
            name:'',
            type:'',
            checkIn:'',
            checkOut:''
        });
    }

    render() {
        const { classes } = this.props;
        return (
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                        <Card>
                            <CardHeader color="primary">
                            <h4 className={classes.cardTitleWhite}>Add Details</h4>
                            </CardHeader>
                            <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={3}>
                                <CustomInput
                                    value={this.state.guestId}
                                    onChange={this.onChangeGuestId}
                                    labelText="Guest Id"
                                    id="guestId"
                                    formControlProps={{
                                    fullWidth: true
                                    }}
                                />                                
                                </GridItem>
                                <GridItem xs={12} sm={12} md={3}>
                                <CustomInput
                                    value={this.state.name}
                                    onChange={this.onChangeName}
                                    labelText="Name of Guest"
                                    id="name"
                                    formControlProps={{
                                    fullWidth: true
                                    }}
                                />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={3}>
                                <CustomInput
                                    value={this.state.type}
                                    onChange={this.onChangeType}
                                    labelText="Id Proof"
                                    id="type"
                                    formControlProps={{
                                    fullWidth: true
                                    }}
                                />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={3}>
                                <CustomInput
                                    value={this.state.checkIn}
                                    onChange={this.onChangeCheckIn}
                                    labelText="Check-In Time"
                                    id="checkIn"
                                    formControlProps={{
                                    fullWidth: true
                                    }}
                                />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={3}>
                                <CustomInput
                                    value={this.state.checkOut}
                                    onChange={this.onChangeCheckOut}
                                    labelText="Check-Out Time"
                                    id="checkOut"
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


export default withStyles(styles)(MyForm);;