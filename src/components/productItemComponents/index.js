import React from "react";

import ProductItem from "../productItem/index";
import { connect } from 'react-redux'

import {Container, Grid} from "@material-ui/core";
import {getProductList} from "../../redux/actions";

const ProductItemComponents = ({prodList, asyncGet}) => {

    asyncGet()

    return(
        <Container maxWidth='xl'>
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="center"
                wrap='wrap'
                spacing={4}
            >
                {
                      prodList.map((data, i)=>(
                        <ProductItem
                            key={i+data.name}
                            {...data}
                        />
                    ))
                }
            </Grid>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        prodList: state.product.products
    }
}
const mapDispatchToProps = dispatch => {
    return {
        asyncGet: ()=>{dispatch(getProductList())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItemComponents);