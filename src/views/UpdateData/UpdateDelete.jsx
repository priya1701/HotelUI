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


class UpdateForm extends Component {

    constructor(props) {
        super(props);
        this.onChangeSamplePckg = this.onChangeSamplePckg.bind(this);
        this.onChangeSGTIN = this.onChangeSGTIN.bind(this);
        this.onChangeBatchNo = this.onChangeBatchNo.bind(this);
        this.onChangeProductNDC = this.onChangeProductNDC.bind(this);
        this.onChangeStartMrktng = this.onChangeStartMrktng.bind(this);
        this.onChangeEndMrktng = this.onChangeEndMrktng.bind(this);
        this.onChangeNDCExFlag = this.onChangeNDCExFlag.bind(this);
        this.onChangePckgDisc = this.onChangePckgDisc.bind(this);
        this.onChangeNDCPckg = this.onChangeNDCPckg.bind(this);
        this.onChangeProdId = this.onChangeProdId.bind(this);
        this.onChangeExpiry = this.onChangeExpiry.bind(this);
        this.onChangeManufacturer = this.onChangeManufacturer.bind(this);
        this.onChangeDrug = this.onChangeDrug.bind(this);
        this.onChangeApplicationNo = this.onChangeApplicationNo.bind(this);
        this.onChangeLotId = this.onChangeLotId.bind(this);
        this.onChangeSSCC = this.onChangeSSCC.bind(this);

        this.onSubmit = this.onSubmit.bind(this);
        this.onClick = this.onClick.bind(this);

        this.state = {
            SGTIN: '',
            SAMPLE_PACKAGE: '',
            BATCHNUMBER: '',
            PRODUCTNDC: '',
            STARTMARKETINGDATE: '',
            NDC_EXCLUDE_FLAG: '',
            ENDMARKETINGDATE: '',
            PACKAGEDESCRIPTION: '',
            NDCPACKAGECODE: '',
            PRODUCTID: '',
            EXPIRYDATE: '',
            MANUFACTURER: '',
            DRUG: '',
            APPLICATIONNUMBER: '',
            lotId: '',
            SSCC: ''
        }
    }
    onChangeSamplePckg(e) {
        this.setState({
            SAMPLE_PACKAGE: e.target.value
        });
    }
    onChangeSGTIN(e) {
        this.setState({
            SGTIN: e.target.value
        });
    }
    onChangeBatchNo(e) {
        this.setState({
            BATCHNUMBER: e.target.value
        });
    }
    onChangeProductNDC(e) {
        this.setState({
            PRODUCTNDC: e.target.value
        });
    }
    onChangeStartMrktng(e) {
        this.setState({
            STARTMARKETINGDATE: e.target.value
        });
    }
    onChangeEndMrktng(e) {
        this.setState({
            ENDMARKETINGDATE: e.target.value
        });
    }
    onChangeNDCExFlag(e) {
        this.setState({
            NDC_EXCLUDE_FLAG: e.target.value
        });
    }
    onChangePckgDisc(e) {
        this.setState({
            PACKAGEDESCRIPTION: e.target.value
        });
    }
    onChangeNDCPckg(e) {
        this.setState({
            NDCPACKAGECODE: e.target.value
        });
    }
    onChangeProdId(e) {
        this.setState({
            PRODUCTID: e.target.value
        });
    }
    onChangeExpiry(e) {
        this.setState({
            EXPIRYDATE: e.target.value
        });
    }
    onChangeManufacturer(e) {
        this.setState({
            MANUFACTURER: e.target.value
        });
    }
    onChangeDrug(e) {
        this.setState({
            DRUG: e.target.value
        });
    }
    onChangeApplicationNo(e) {
        this.setState({
            APPLICATIONNUMBER: e.target.value
        });
    }
    onChangeLotId(e) {
        this.setState({
            lotId: e.target.value
        });
    }
    onChangeSSCC(e) {
        this.setState({
            SSCC: e.target.value
        });
    }
    
    
    onSubmit(e) {
        e.preventDefault();
        const Update = this.state.SGTIN;
        const newData = {
            SAMPLE_PACKAGE: this.state.SAMPLE_PACKAGE,
            BATCHNUMBER: this.state.BATCHNUMBER,
            PRODUCTNDC: this.state.PRODUCTNDC,
            STARTMARKETINGDATE: this.state.STARTMARKETINGDATE,
            NDC_EXCLUDE_FLAG: this.state.NDC_EXCLUDE_FLAG,
            ENDMARKETINGDATE: this.state.ENDMARKETINGDATE,
            PACKAGEDESCRIPTION: this.state.PACKAGEDESCRIPTION,
            NDCPACKAGECODE: this.state.NDCPACKAGECODE,
            PRODUCTID: this.state.PRODUCTID,
            EXPIRYDATE: this.state.EXPIRYDATE,
            MANUFACTURER: this.state.MANUFACTURER,
            DRUG: this.state.DRUG,
            APPLICATIONNUMBER: this.state.APPLICATIONNUMBER,
            lotId: this.state.lotId,
            SSCC: this.state.SSCC
        }
        axios.put('http://13.126.150.151:3000/api/Product/'+Update, newData)
        .then(res => console.log(res.data));
        console.log("PostData: "+this.state);
        this.setState({
            SGTIN: '',
            SAMPLE_PACKAGE: '',
            BATCHNUMBER: '',
            PRODUCTNDC: '',
            STARTMARKETINGDATE: '',
            NDC_EXCLUDE_FLAG: '',
            ENDMARKETINGDATE: '',
            PACKAGEDESCRIPTION: '',
            NDCPACKAGECODE: '',
            PRODUCTID: '',
            EXPIRYDATE: '',
            MANUFACTURER: '',
            DRUG: '',
            APPLICATIONNUMBER: '',
            lotId: '',
            SSCC: ''
        });
    }

    onClick(e){
        e.preventDefault();
        const del = {
            SGTIN:this.state.SGTIN
        }

        axios.delete('http://13.126.150.151:3000/api/Product/'+del.SGTIN)
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.setState({
            SGTIN:''
        });
      })
    }

    render() {
        const { classes } = this.props;
        return (
                    <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                        <Card>
                            <CardHeader color="primary">
                            <h4 className={classes.cardTitleWhite}>Update Drug</h4>
                            </CardHeader>
                            <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={3}>
                                <CustomInput
                                    value={this.state.SGTIN}
                                    onChange={this.onChangeSGTIN}
                                    labelText="SGTIN to be Updated"
                                    id="SGTIN"
                                    formControlProps={{
                                    fullWidth: true
                                    }}
                                />                                
                                </GridItem>
                                <GridItem xs={12} sm={12} md={3}>
                                <CustomInput
                                value={this.state.SAMPLE_PACKAGE}
                                onChange={this.onChangeSamplePckg}
                                labelText="Sample Package"
                                id="SAMPLE_PACKAGE"
                                formControlProps={{
                                fullWidth: true
                                }}
                            />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={3}>
                                <CustomInput
                                    value={this.state.BATCHNUMBER}
                                    onChange={this.onChangeBatchNo}
                                    labelText="Batch No"
                                    id="BATCHNUMBER"
                                    formControlProps={{
                                    fullWidth: true
                                    }}
                                />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={3}>
                                <CustomInput
                                    value={this.state.PRODUCTNDC}
                                    onChange={this.onChangeProductNDC}
                                    labelText="Product NDC"
                                    id="PRODUCTNDC"
                                    formControlProps={{
                                    fullWidth: true
                                    }}
                                />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={3}>
                                <CustomInput
                                    value={this.state.STARTMARKETINGDATE}
                                    onChange={this.onChangeStartMrktng}
                                    labelText="Start Marketing Date"
                                    id="STARTMARKETINGDATE"
                                    formControlProps={{
                                    fullWidth: true
                                    }}
                                />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={3}>
                                <CustomInput
                                    value={this.state.NDC_EXCLUDE_FLAG}
                                    onChange={this.onChangeNDCExFlag}
                                    labelText="NDC Exclude Flag"
                                    id="NDC_EXCLUDE_FLAG"
                                    formControlProps={{
                                    fullWidth: true
                                    }}
                                />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={3}>
                                <CustomInput
                                    value={this.state.ENDMARKETINGDATE}
                                    onChange={this.onChangeEndMrktng}
                                    labelText="End Marketing Date"
                                    id="ENDMARKETINGDATE"
                                    formControlProps={{
                                    fullWidth: true
                                    }}
                                />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={3}>
                                <CustomInput
                                    value={this.state.PACKAGEDESCRIPTION}
                                    onChange={this.onChangePckgDisc}
                                    labelText="Package Description"
                                    id="PACKAGEDESCRIPTION"
                                    formControlProps={{
                                    fullWidth: true
                                    }}
                                />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={3}>
                                <CustomInput
                                    value={this.state.NDCPACKAGECODE}
                                    onChange={this.onChangeNDCPckg}
                                    labelText="NDC Package Code"
                                    id="NDCPACKAGECODE"
                                    formControlProps={{
                                    fullWidth: true
                                    }}
                                />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={3}>
                                <CustomInput
                                    value={this.state.PRODUCTID}
                                    onChange={this.onChangeProdId}
                                    labelText="Pruduct Id"
                                    id="PRODUCTID"
                                    formControlProps={{
                                    fullWidth: true
                                    }}
                                />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={3}>
                                <CustomInput
                                    value={this.state.EXPIRYDATE}
                                    onChange={this.onChangeExpiry}
                                    labelText="Expiry Date"
                                    id="EXPIRYDATE"
                                    formControlProps={{
                                    fullWidth: true
                                    }}
                                />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={3}>
                                <CustomInput
                                    value={this.state.MANUFACTURER}
                                    onChange={this.onChangeManufacturer}
                                    labelText="Manufacturer"
                                    id="MANUFACTURER"
                                    formControlProps={{
                                    fullWidth: true
                                    }}
                                />
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={3}>
                                <CustomInput
                                    value={this.state.DRUG}
                                    onChange={this.onChangeDrug}
                                    labelText="Drug"
                                    id="DRUG"
                                    formControlProps={{
                                    fullWidth: true
                                    }}
                                />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={3}>
                                <CustomInput
                                    value={this.state.APPLICATIONNUMBER}
                                    onChange={this.onChangeApplicationNo}
                                    labelText="Application Number"
                                    id="APPLICATIONNUMBER"
                                    formControlProps={{
                                    fullWidth: true
                                    }}
                                />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={3}>
                                <CustomInput
                                    value={this.state.lotId}
                                    onChange={this.onChangeLotId}
                                    labelText="Lot Id"
                                    id="lotId"
                                    formControlProps={{
                                    fullWidth: true
                                    }}
                                />
                                </GridItem>
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
                            <Button color="success" onClick={this.onSubmit}>Update</Button>
                            </CardFooter>
                        </Card>
                        </GridItem>



                        <GridItem xs={12} sm={12} md={12}>
                        <Card>
                            <CardHeader color="primary">
                            <h4 className={classes.cardTitleWhite}>Delete Drug</h4>
                            </CardHeader>
                            <CardBody>
                            <GridContainer>
                                <GridItem xs={12} sm={12} md={3}>
                                <CustomInput
                                    value={this.state.SGTIN}
                                    onChange={this.onChangeSGTIN}
                                    labelText="SGTIN"
                                    id="SGTIN"
                                    formControlProps={{
                                    fullWidth: true
                                    }}
                                />
                                </GridItem>
                            </GridContainer>
                            </CardBody>
                            <CardFooter>
                            <Button color="maroon" onClick={this.onClick}>Delete</Button>
                            </CardFooter>
                        </Card>
                        </GridItem>
                    </GridContainer>
        )
    }

}


export default withStyles(styles)(UpdateForm);;