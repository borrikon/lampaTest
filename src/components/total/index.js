import React from 'react';
import {Typography} from "@material-ui/core";

const Total = ({getTotalPrice}) => {
    return (
        <div>
            <Typography component="h5" variant="h5">
                total {getTotalPrice()}
            </Typography>
        </div>
    )
}
export default Total;