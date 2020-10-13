import React from "react";
import {CardContent, CardMedia, Grid, Typography} from "@material-ui/core";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import Card from '@material-ui/core/Card';
import {useStyles} from "./styles";

const ProductItemBasket = () => {

    const { root, number, img, content, innerContent } = useStyles()

    return(
        <Grid className={root} item xs={4}>
            <Card>
                <CardContent className={content}>
                    <CardMedia className={img}
                        //image="/static/images/cards/live-from-space.jpg"
                    />
                    <div className={innerContent}>
                        <div>
                        <Typography component="h5" variant="h5">
                            Some item
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            some description
                        </Typography>
                        </div>
                        <div className={number}>
                            <AddIcon fontSize='small' />
                            <Typography component="h5" variant="h5">
                                1
                            </Typography>
                            <RemoveIcon fontSize='small' />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default ProductItemBasket;