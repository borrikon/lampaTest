import React from "react";
import {CardContent, CardMedia, Grid, Typography} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Card from '@material-ui/core/Card';
import {useStyles} from "./styles";
import {connect} from "react-redux";
import {addTotalPrise, decrement, deleteBasketProd, increment} from "../../redux/actions";
import {store} from "../../redux/store";
import {getTotalPrice} from "../../utils/utils";


const ProductItemBasket = ({id, img, name, description, prise, count, decr, incr, add, deleteProd}) => {

    const { root, number, image, content, innerContent } = useStyles()

    function i (){
        incr(id)
        add(getTotalPrice(store.getState().product.basketProducts))
    }
    function d() {
        if(count<=1){
            deleteProd(id)
        }
        decr(id)
        add(getTotalPrice(store.getState().product.basketProducts))
    }

    return(
        <Grid className={root} item xs={4}>
            <Card>
                <CardContent className={content}>
                    <CardMedia className={image}
                        image={img}
                    />
                    <div className={innerContent}>
                        <div>
                        <Typography component="h5" variant="h5">
                            {name}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {description}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            {prise}$
                        </Typography>
                        </div>
                        <div className={number}>
                            <AddIcon onClick={()=>i()} fontSize='small' />
                            <Typography component="h5" variant="h5">
                                {count}
                            </Typography>
                            <RemoveIcon onClick={()=>d()} fontSize='small' />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Grid>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        incr: (id)=>dispatch(increment(id)),
        decr: (id)=>dispatch(decrement(id)),
        add: (prise)=>dispatch(addTotalPrise(prise)),
        deleteProd: (id)=>dispatch(deleteBasketProd(id))
    }
}
export default connect(null, mapDispatchToProps)(ProductItemBasket);