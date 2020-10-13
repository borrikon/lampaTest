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

import {addProductToBasket} from "../../redux/actions";
import { connect } from 'react-redux';


const ProductItem = (props) => {

    const {img, name, description, price, addProduct} = props

    const { root, cont } = useStyles()

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
                            {price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button onClick={()=>
                        addProduct(props)
                    } size="small" color="primary">
                        Add to bucket
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}

const mapDispatchToProps = dispatch => {
    return  {
        addProduct: (props)=>dispatch(addProductToBasket(props))
    }
}

export default connect(null, mapDispatchToProps)(ProductItem);