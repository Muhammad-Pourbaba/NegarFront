import React from 'react';
import { AppBar,Toolbar,IconButton,Badge,MenuItem,Menu,Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { classExpression } from '@babel/types';
import logo from '../../assets/negar-icon.png';
import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();
    return (
        <>
            <AppBar position="fixed" className={classes.appbar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="NegarOnline" height="25px" className={classes.image} />
                        Negar
                    </Typography>
                    <div className={classes.grow}/>
                    <div className={classes.button}>
                       <IconButton aria-label="کالا های درون سبد" color="inherit">
                           <Badge badgeContent={0} color="secondary">
                               <ShoppingCart />
                           </Badge>
                        </IconButton> 

                    </div>
                </Toolbar>

            </AppBar>
        </>
    )
};

export default Navbar
