import React from 'react';
import evilminion from'../Images/evil-minion-2.jpg';
import babygroot from'../Images/baby-groot.jpg';
import traxxas from'../Images/traxxas.jpg';
import biglogo from'../Images/big-logo.jpg';
import legocar3 from'../Images/lego-car-3.jpg';
import legocar4 from'../Images/lego-car-4.jpg';
import legocharger from'../Images/lego-charger.jpg';
import legododge from'../Images/lego-dodge.jpg';
import legofigure2 from'../Images/lego-figure-2.jpg';
import legoporsche from'../Images/lego-porsche.jpg';
import legostarwars from'../Images/Lego-star-wars.jpg';
import minecraftlego from'../Images/minecraft-lego.jpg';
import minionlego from'../Images/minion-lego.jpg';
import nerf3 from'../Images/nerf-3.jpg';
import nerf4 from'../Images/nerf-4.jpg.jpg';
//import stroomtrooper from'../Images/stroom-trooper.jpg';
import{ connect } from 'react-redux';
import{addBasket} from '../Actions/addActions';         

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Home=(props)=> {
    const classes = useStyles();
    console.log(props);  
    return(
        <div className="container">
            <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={classes.paper}>
                        <div >
                            <img src={legocar3} alt="Lebron 17 Monstars" title='Lebron 17 Monstars'/>
                            <h3>Lebron 17 "Monstars"</h3>
                            <h3>$820</h3>
                            <button onClick={() =>props.addBasket('legocar3')}  >Add to Cart</button>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>
                    <div >
                        <img src={legoporsche} alt="Specjalna edycja Air Jordan 34" title='Specjalna edycja Air Jordan 34'/>
                        <h3>Specjalna edycja Air Jordan 34</h3>
                        <h3>$711</h3>
                        <button onClick={() =>props.addBasket('legoporsche')}  >Add to Cart</button>
                    </div>
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>
                    <div>
                        <img src={traxxas} alt="Air Jordan IX Retro" title='Air Jordan IX Retro'/>
                        <h3>Air Jordan IX Retro</h3>
                        <h3>$750</h3>
                        <button onClick={() =>props.addBasket('traxxas')}  >Add to Cart</button>
                    </div>
                    </Paper>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={classes.paper}>
                    <div >
                        <img src={biglogo} alt="Women's Air Jordan I High OG" title='Womens Air Jordan I High OG'/>
                        <h3>Women's Air Jordan I High OG</h3>
                        <h3>$600</h3>
                        <button onClick={() =>props.addBasket('biglogo')} >Add to Cart</button>
                    </div>                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>
                    <div >
                        <img src={legocar4} alt="Air Jordan III Retro U" title='Air Jordan III "Retro U"'/>
                        <h3>Air Jordan III "Retro U"</h3>
                        <h3>$390</h3>
                        <button onClick={() =>props.addBasket('legocar4')} >Add to Cart</button>
                    </div>                    
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>
                    <div >
                        <img src={legocharger} alt="KYRIE 6 Trophies" title='KYRIE 6 "Trophies"'/>
                        <h3>KYRIE 6 "Trophies"</h3>
                        <h3>$420</h3>
                        <button onClick={() =>props.addBasket('legocharger')} >Add to Cart</button>
                    </div>                    
                    </Paper>
                </Grid>
            </Grid>


            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={classes.paper}>
                    <div>
                        <img src={legododge} alt="KD 12 Don C" title='KD 12 Don C'/>
                        <h3>KD 12 "Don C"</h3>
                        <h3>$520</h3>
                        <button onClick={() =>props.addBasket('legododge')} >Add to Cart</button>
                    </div>                    
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>
                    <div >
                        <img src={legofigure2} alt="Nike Mag" title='Nike Mag'/>
                        <h3>Nike Mag</h3>
                        <h3>$9000</h3>
                        <button onClick={() =>props.addBasket('legofigure2')}  >Add to Cart</button>
                    </div>
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>
                    <div>
                        <img src={legostarwars} alt="PG4 Gatorade ASW" title='PG4 Gatorade "ASW"'/>
                        <h3>PG4 Gatorade "ASW"</h3>
                        <h3>$390</h3>
                        <button onClick={() =>props.addBasket('legostarwars')}  >Add to Cart</button>
                    </div>
                    </Paper>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={classes.paper}>
                    <div >
                        <img src={minecraftlego} alt="All Star Pro BB Pack" title='All Star Pro BB Pack'/>
                        <h3>All Star Pro BB Pack</h3>
                        <h3>$206</h3>
                        <button onClick={() =>props.addBasket('minecraftlego')}  >Add to Cart</button>
                    </div>                 
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>
                    <div >
                        <img src={minionlego} alt="Jordan Why Not Zer0.3" title='Jordan Why Not Zer0.3'/>
                        <h3>Jordan Why Not Zer0.3</h3>
                        <h3>$706</h3>
                        <button onClick={() =>props.addBasket('minionlego')}  >Add to Cart</button>
                    </div>
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>
                    <div >
                        <img src={nerf3} alt="Nike Mercurial Superfly 7 Elite CR7 Safari FG" title='Nike Mercurial Superfly 7 Elite CR7 Safari FG'/>
                        <h3>Nike Mercurial Superfly 7 Elite CR7 Safari FG</h3>
                        <h3>$950</h3>
                        <button onClick={() =>props.addBasket('nerf3')}  >Add to Cart</button>
                    </div>
                    </Paper>
                </Grid>
            </Grid>            


            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={classes.paper}>
                    <div>
                        <img src={nerf4} alt="Nike Air Max 270 G" title='Nike Air Max 270 G'/>
                        <h3>Nike Air Max 270 G</h3>
                        <h3>$450</h3>
                        <button onClick={() =>props.addBasket('nerf4')}  >Add to Cart</button>
                    </div>

                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>
                    <div >
                        <img src={evilminion} alt="LeBron 17" title='LeBron 17'/>
                        <h3>LeBron 17</h3>
                        <h3>$398</h3>
                        <button onClick={() =>props.addBasket('evilminion')} >Add to Cart</button>
                    </div>
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>
                    <div >
                        <img src={babygroot} alt="Nike Air Max Plus 3" title='Nike Air Max Plus 3'/>
                        <h3>Nike Air Max Plus 3</h3>
                        <h3>$478</h3>
                        <button onClick={() =>props.addBasket('babygroot')} >Add to Cart</button>
                    </div>
                    </Paper>
                </Grid>
            </Grid>            

            </div>

            </div>
    );
}
export default connect(null, {addBasket})(Home);

/*

                <div className="image">
                    <img src={stroomtrooper} alt="Stroom Trooper" title='Stroom Trooper'/>
                    <h3>Stroom Trooper</h3>
                    <h3>$350</h3>
                    <button onClick={() =>props.addBasket('stroomtrooper')} className="addToCart cart16" >Add to Cart</button>
                </div>
*/