import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {useStyles} from "./styles";

const Form = () => {

    const { root, btn } = useStyles()

    return(
        <form className={root} noValidate autoComplete="off">
            <TextField margin="dense" fullWidth id="outlined-basic" label="Name" variant="outlined" />
            <TextField margin="dense" fullWidth id="outlined-basic" label="Surname" variant="outlined" />
            <TextField margin="dense" fullWidth id="outlined-basic" label="Address" variant="outlined" />
            <TextField margin="dense" fullWidth id="outlined-basic" label="Phone" variant="outlined" />
            <Button className={btn} size='large' variant="contained" color="primary">
                Primary
            </Button>
        </form>
    )
}
export default Form;