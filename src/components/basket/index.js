import React from "react";
import Form from "../form";
import {Grid, Typography} from "@material-ui/core";
// import ProductItemBasket from "../ProductItemBasket";
import {useStyles} from "./styles";

const Basket = () => {

    const { root } = useStyles()

    // let productsArray = []

    // function getProductsFromLocal(){
    //     for(let i = 1; i<=6; i++){
    //         console.log(typeof localStorage.getItem(`${i}`) !== 'null')
    //         if(localStorage.getItem(`${i}`) !== null){
    //             productsArray.push(JSON.parse(localStorage.getItem(`${i}`)))
    //         }
    //     }
    //
    // }

    return(

        <div className={root}>
            {/*{getProductsFromLocal()}*/}
            <Grid justify="space-between" alignItems="flex-start" container spacing={3}>
                <Grid item xs={6}>
                    <Grid container direction='column'>
                        {/*{*/}
                        {/*    productsArray.map((item, i)=> {*/}
                        {/*        return(<ProductItemBasket*/}
                        {/*            key={i}*/}
                        {/*            {...item}*/}
                        {/*        />)*/}
                        {/*    })*/}
                        {/*}*/}
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Form />
                </Grid>
            </Grid>
            <div>
                <Typography component="h5" variant="h5">
                    total
                </Typography>
            </div>
        </div>
    )
}
export default Basket;