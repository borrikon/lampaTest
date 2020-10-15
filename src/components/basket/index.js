import React from "react";
import Form from "../form";
import {Grid} from "@material-ui/core";
import ProductItemBasket from "../ProductItemBasket";
import {useStyles} from "./styles";
import {connect} from "react-redux";
import Total from "../total";

const Basket = ({basketItems}) => {

    const { root } = useStyles()

    return(

        <div className={root}>
            <Grid justify="space-between" alignItems="flex-start" container spacing={3}>
                <Grid item xs={6}>
                    <Grid container direction='column'>
                        {
                            (basketItems.length > 0)
                             ? basketItems.map((item, i)=> {
                                return(<ProductItemBasket
                                    key={i}
                                    {...item}
                                    basketItems={basketItems}
                                />)
                            })
                            : <h4>Buy something</h4>
                        }
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Form />
                </Grid>
            </Grid>
            <Total />
        </div>
    )
}
const mapStateToProps = (state)=>{
    return {
        basketItems: state.product.basketProducts
    }
}
export default connect(mapStateToProps, null)(Basket);