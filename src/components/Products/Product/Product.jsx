import React from 'react'; 

import { Card,CardMedia,CardContent,CardActions,Typography,IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles';

const Product = ({product}) => {
    const classes =useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product.image}  title={product.name} />
            <CardContent>
            <div dir="rtl" className={classes.cardContent}>

                <Typography variant="h5" gutterBottom>
                    {product.name}
                </Typography>

                <Typography variant="h5" >
                    {product.price}
                </Typography>

            </div>

            <Typography dir="rtl" variant="body2" color="textSecondary">
                {product.description}
            </Typography>
            </CardContent>
            <CardActions diableSpacing className={classes.CardActions}>
                <IconButton aria-label="افزودن به سبد">
                    <AddShoppingCart />

                </IconButton>
            </CardActions>
            
        </Card>
    )
}

export default Product
