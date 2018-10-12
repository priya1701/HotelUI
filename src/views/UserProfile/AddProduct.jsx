import React, {Component} from "react";
import axios from "axios";
import DateTimePicker from 'react-datetime-picker';
//import {Redirect } from "react-router-dom";
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
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';



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
    },
    formControl: {
        margin: "spacing.unit",
        minWidth: 200,
    }

};




class MyForm extends Component {

    constructor(props) {
        super(props);
        this.onChangeGuestId = this.onChangeGuestId.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeNationality = this.onChangeNationality.bind(this);
        this.onChangeCheckIn = this.onChangeCheckIn.bind(this);
        this.onChangeCheckOut = this.onChangeCheckOut.bind(this);
        
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            guestId:'',
            firstName:'',
            lastName:'',
            type:'',
            nationality:'',
            checkIn:'',
            checkOut:'',
            hotel:'TAJ KRISHNA',
            verified:'PENDING'
        }
    }
    onChangeGuestId(e) {
        this.setState({
            guestId: e.target.value
        });
    }
    onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        });
    }
    onChangeLastName(e) {
        this.setState({
            lastName: e.target.value
        });
    }
    onChangeType(e) {
        this.setState({
            type: e.target.value
        });
    }
    onChangeNationality(e) {
        this.setState({
            nationality: e.target.value
        });
    }
    onChangeCheckIn(e) {
        this.setState({
            checkIn: e
        });
    }
    onChangeCheckOut(e) {
        this.setState({
            checkOut: e
        });
    }
    
    
    onSubmit(e) {
        e.preventDefault();
        const newData = {
            guestId: this.state.guestId,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            type: this.state.type,
            nationality: this.state.nationality,
            checkIn: this.state.checkIn,
            checkOut: this.state.checkOut,
            hotel:this.state.hotel,
            verified: this.state.verified,
        }
        axios.post('http://138.68.51.48:3000/api/guest', newData)
        .then(res => {
            console.log("REsponsssss",res.status);
            if(res.status === 200){
                this.setState({
                    guestId:'',
                    firstName:'',
                    lastName:'',
                    type:'',
                    nationality:'',
                    checkIn:'',
                    checkOut:''
                });
                alert("Guest has been added successfully"); 
                window.location="allcustomers" ;
            }
        })
        .catch(error => {
            console.log(error);
            alert(error);
        });
        //console.log("PostData: "+this.state);
        //this.props.history.push('/allcustomers');
        // this.setState({
        //     guestId:'',
        //     firstName:'',
        //     lastName:'',
        //     type:'',
        //     nationality:'',
        //     checkIn:'',
        //     checkOut:''
        // });
    }

    render() {
        const { classes} = this.props;        
        return (
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                        <Card>
                            <CardHeader color="primary">
                            <h4 className={classes.cardTitleWhite}>Add Details</h4>
                            </CardHeader>
                            <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={4}>
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
                                <GridItem xs={12} sm={12} md={4}>
                                <CustomInput
                                    value={this.state.firstName}
                                    onChange={this.onChangeFirstName}
                                    labelText="First Name"
                                    id="firstName"
                                    formControlProps={{
                                    fullWidth: true
                                    }}
                                />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={4}>
                                <CustomInput
                                    value={this.state.lastName}
                                    onChange={this.onChangeLastName}
                                    labelText="Last Name"
                                    id="lastName"
                                    formControlProps={{
                                    fullWidth: true
                                    }}
                                />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                <FormControl className={classes.formControl}>
                                <InputLabel htmlFor="Doc_Type">Id Proof</InputLabel>
                                <Select
                                    autoWidth={true}
                                    value={this.state.type}
                                    onChange={this.onChangeType}
                                    inputProps={{
                                    name: 'type',
                                    id: 'Doc_Type',
                                    }}
                                >
                                    <MenuItem value={"Passport"}>Passport</MenuItem>
                                    <MenuItem value={"Driving_Licence"}>Driving Licence</MenuItem>
                                    <MenuItem value={"Aadhar"}>Aadhar</MenuItem>
                                    <MenuItem value={"VoterId"}>Voter Id</MenuItem>
                                </Select>
                                </FormControl>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                <CustomInput
                                    value={this.state.nationality}
                                    onChange={this.onChangeNationality}
                                    labelText="Nationality"
                                    id="nationality"
                                    formControlProps={{
                                    fullWidth: true
                                    }}
                                />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={6}>
                                <FormControl className={classes.formControl}>
                                <label>Check-In Time</label>
                                <DateTimePicker
                                    onChange={this.onChangeCheckIn}
                                    value={this.state.checkIn}
                                    name="Check-In Time"
                                />
                                </FormControl>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={6}>
                                <FormControl className={classes.formControl}>
                                <label>Check-Out Time</label>
                                <DateTimePicker
                                    value={this.state.checkOut}
                                    onChange={this.onChangeCheckOut}
                                    name="Check-Out Time"
                                
                                />
                                </FormControl>
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