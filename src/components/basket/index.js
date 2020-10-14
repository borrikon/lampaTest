import React from "react";
import Form from "../form";
import {Grid} from "@material-ui/core";
import ProductItemBasket from "../ProductItemBasket";
import {useStyles} from "./styles";
import {connect} from "react-redux";
import Total from "../total";

const Basket = ({basketItems}) => {

    const { root } = useStyles()


    function getTotalPrice() {
        let total = 0
        basketItems.forEach(item => total += item.price)
        return total
    }

    return(

        <div className={root}>
            <Grid justify="space-between" alignItems="flex-start" container spacing={3}>
                <Grid item xs={6}>
                    <Grid container direction='column'>
                        {
                            basketItems.map((item, i)=> {
                                return(<ProductItemBasket
                                    key={i}
                                    {...item}
                                />)
                            })
                        }
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Form />
                </Grid>
            </Grid>
            <Total getTotalPrice={getTotalPrice} />
        </div>
    )
}
const mapStateToProps = (state)=>{
    return {
        basketItems: state.product.basketProducts
    }
}
export default connect(mapStateToProps, null)(Basket);