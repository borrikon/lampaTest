import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {useStyles} from "./styles";
import {Link} from "react-router-dom";
import Total from "../total";

const Menu = () => {

    const { menu, link, cont, btn, container } = useStyles()

    return(
        <>
            <AppBar className={cont} position="static">
                <Toolbar className={menu}>
                    <Typography variant="h6">
                        <Link className={link} to='/'>
                            Shop
                        </Link>
                    </Typography>
                    <div className={container}>
                        <Total/>
                        <Button className={btn} variant="contained" color="secondary">
                            <Link className={link} to='/basket'>
                                Items
                            </Link>
                        </Button>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}
export default Menu;