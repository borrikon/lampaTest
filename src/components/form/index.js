import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {useStyles} from "./styles";
import {connect} from "react-redux";
import {sendUserData} from "../../redux/actions";

const Form = ({order, send}) => {

    const { root, btn } = useStyles()

    const [ name, setName ] = useState('')
    const [ surname, setSurname ] = useState('')
    const [ address, setAddress ] = useState('')
    const [ phone, setPhone ] = useState('')

    function onChangeName (e) { setName(e.target.value) }
    function onChangeSurname (e) { setSurname(e.target.value) }
    function onChangeAddress (e) { setAddress(e.target.value) }
    function onChangePhone (e) { setPhone(e.target.value) }

    let data = {}

    function handleSubmitForm (e) {
        e.preventDefault()
        data = {
            name,
            surname,
            address,
            phone,
            order
        }
        JSON.stringify(data)
        send(data)
        setName('')
        setSurname('')
        setAddress('')
        setPhone('')
    }

    return(
        <form onSubmit={(e)=>handleSubmitForm(e)} noValidate className={root}  autoComplete="off">
            <TextField
                value={name}
                onChange={(e)=>onChangeName(e)}
                margin="dense"
                fullWidth
                id="outlined-basic"
                label="Name"
                variant="outlined"
            />
            <TextField
                value={surname}
                onChange={(e)=>onChangeSurname(e)}
                margin="dense"
                fullWidth
                id="outlined-basic"
                label="Surname"
                variant="outlined"
            />
            <TextField
                value={address}
                onChange={(e)=>onChangeAddress(e)}
                margin="dense"
                fullWidth
                id="outlined-basic"
                label="Address"
                variant="outlined"
            />
            <TextField
                value={phone}
                onChange={(e)=>onChangePhone(e)}
                margin="dense"
                fullWidth
                id="outlined-basic"
                label="Phone"
                variant="outlined"
            />
            <Button type="submit" className={btn} size='large' variant="contained" color="primary">
                GET IT
            </Button>
        </form>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        send: (data)=>dispatch(sendUserData(data))
    }
}
const mapStateToProps = state => {
    return {
       order: state.product.basketProducts
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Form);