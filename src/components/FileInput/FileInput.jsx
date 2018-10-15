import React from "react";

//import Button from "@material-ui/core/Button";
import Button from "components/CustomButtons/Button.jsx";
import FormControl from "@material-ui/core/FormControl";

function FileUpload({ ...props }) {
    const {
        classes,
        formControlProps,
        color,
        round,
        children,
        disabled,
        simple,
        size,
        block,
        link,
        justIcon,
        className,
        onChange,
        onClick,
        ref,
        muiClasses,
        ...rest
      } = props;

      return(
        <FormControl>
        <input
        accept="image/*"
        id="raised-button-file"
        multiple
        type="file"
      />
      
        <Button variant="raised" component="span" >
          Upload
        </Button>
     
        </FormControl>
      );
}

export default (FileUpload);