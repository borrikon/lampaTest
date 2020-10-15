import React from 'react';
import {Typography} from "@material-ui/core";
import {connect} from "react-redux";

const Total = ({total}) => {
    return (
        <div>
            <Typography component="h5" variant="h5">
                 {total>0 ? `TOTAL ${total} $`  : null}
            </Typography>
        </div>
    )
}
const mapDispatchToProps = (state) => {
    return {
        total: state.product.totalPrise
    }
}
export default connect(mapDispatchToProps, null)(Total);