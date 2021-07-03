import React from 'react';
import {Grid} from '@material-ui/core';
import { Description } from '@material-ui/icons';
import Product from './Product/Product';
import useStyles from './styles'

const products = [

    {id:1, name:'مونالیزا', description:'معروف ترین اثر هنری تاریخ',price:'25000t', image:'../../../assets/negar-icon.png'},
    {id:2, name:'شام آخر', description:'از شاهکار های داوینچی', price:'22500t',image:'../../../images'},

]

const Products= () => {
    const classes = useStyles();
    return(
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <Grid container justify="center" spacing={4} >
                    {products.map((product) => (
                        <Grid item key = {product.id} xs={12} sm={6} md={4} lg={3} >
                            <Product product = {product}/>
                        </Grid>
                    ))}
                </Grid>
            </main>

    );
}

export default Products;