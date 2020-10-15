import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Grid} from "@material-ui/core";

import {useStyles} from "./styles";

import {addCountProduct, addProductToBasket, addTotalPrise} from "../../redux/actions";
import { connect } from 'react-redux';
import {changeCountOfBasketProd, filterDuplicate, getTotalPrice} from "../../utils/utils";
import {store} from "../../redux/store";


const ProductItem = (props) => {

    const {id, img, name, description, count, prise, addProduct, addTotal, basketItems, addCount} = props

    const { root, cont } = useStyles()

    function addProductClick(id) {

        const duplicate = filterDuplicate(basketItems)
        let isInBasket = Object.keys(duplicate).filter(item => +item === id)

        if(isInBasket.length > 0){
            addCount(changeCountOfBasketProd(duplicate, basketItems))
        }else{
            addProduct({id, name, img, description, prise, count})
        }
        addTotal(getTotalPrice(store.getState().product.basketProducts))
    }


    return(
        <Grid className={cont} item xs={4}>
            <Card className={root}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        src={img}
                        alt="Contemplative Reptile"
                        height="140"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {description}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {prise}$
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button onClick={()=>
                        addProductClick(id)
                    } size="small" variant="contained" color="primary">
                        Add to cart
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

const mapDispatchToProps = dispatch => {
    return  {
        addTotal: (prise)=>dispatch(addTotalPrise(prise)),
        addProduct: (props)=>dispatch(addProductToBasket(props)),
        addCount: (item)=>dispatch(addCountProduct(item))
    }
}
const mapStateToProps = state => {
    return {
        basketItems: state.product.basketProducts
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);