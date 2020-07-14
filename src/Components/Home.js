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
                            <img src={legocar3} alt="Lego Aston Martin DB5" title='Lego Aston Martin DB5'/>
                            <h3>Lego Aston Martin DB5</h3>
                            <h3>$420</h3>
                            <button onClick={() =>props.addBasket('legocar3')}  >Add to Cart</button>
                        </div>
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>
                    <div >
                        <img src={legoporsche} alt="Lego Technic Porsche 911 RSR" title='Lego Technic Porsche 911 RSR'/>
                        <h3>Lego Technic Porsche 911 RSR</h3>
                        <h3>$711</h3>
                        <button onClick={() =>props.addBasket('legoporsche')}  >Add to Cart</button>
                    </div>
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>
                    <div>
                        <img src={traxxas} alt="Traxxas XO-1" title='Traxxas XO-1'/>
                        <h3>Traxxas XO-1</h3>
                        <h3>$950</h3>
                        <button onClick={() =>props.addBasket('traxxas')}  >Add to Cart</button>
                    </div>
                    </Paper>
                </Grid>
            </Grid>

            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={classes.paper}>
                    <div >
                        <img src={biglogo} alt="Lego Technic Car Transporter" title='Lego Technic Car Transporter'/>
                        <h3>Lego Technic Car Transporter</h3>
                        <h3>$600</h3>
                        <button onClick={() =>props.addBasket('biglogo')} >Add to Cart</button>
                    </div>                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>
                    <div >
                        <img src={legocar4} alt="Lego Ferrari F8" title='Lego Ferrari F8'/>
                        <h3>Lego Ferrari F8</h3>
                        <h3>$390</h3>
                        <button onClick={() =>props.addBasket('legocar4')} >Add to Cart</button>
                    </div>                    
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>
                    <div >
                        <img src={legocharger} alt="Lego Mustang" title='Lego Mustang'/>
                        <h3>Lego Mustang</h3>
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
                        <img src={legododge} alt="Lego Technic Dodge Charger" title='Lego Technic Dodge Charger'/>
                        <h3>Lego Technic Dodge Charger</h3>
                        <h3>$520</h3>
                        <button onClick={() =>props.addBasket('legododge')} >Add to Cart</button>
                    </div>                    
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>
                    <div >
                        <img src={legofigure2} alt="Lego Gamer" title='Lego Gamer'/>
                        <h3>Lego Gamer</h3>
                        <h3>$8</h3>
                        <button onClick={() =>props.addBasket('legofigure2')}  >Add to Cart</button>
                    </div>
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>
                    <div>
                        <img src={legostarwars} alt="Lego Anakins Jedi Interceptor" title='Lego Anakins Jedi Interceptor'/>
                        <h3>Lego Anakins Jedi Interceptor</h3>
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
                        <img src={minecraftlego} alt="Lego Minecraft Creeper and Cat" title='Lego Minecraft Creeper and Cat'/>
                        <h3>Lego Minecraft Creeper and Cat</h3>
                        <h3>$96</h3>
                        <button onClick={() =>props.addBasket('minecraftlego')}  >Add to Cart</button>
                    </div>                 
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>
                    <div >
                        <img src={minionlego} alt="Lego Minion Robot" title='Lego Minion Robot'/>
                        <h3>Lego Minion Robot</h3>
                        <h3>$106</h3>
                        <button onClick={() =>props.addBasket('minionlego')}  >Add to Cart</button>
                    </div>
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>
                    <div >
                        <img src={nerf3} alt="Nerf N-Strike Elite Infinus" title='Nerf N-Strike Elite Infinus'/>
                        <h3>Nerf N-Strike Elite Infinus</h3>
                        <h3>$650</h3>
                        <button onClick={() =>props.addBasket('nerf3')}  >Add to Cart</button>
                    </div>
                    </Paper>
                </Grid>
            </Grid>            


            <Grid container spacing={3}>
                <Grid item xs>
                    <Paper className={classes.paper}>
                    <div>
                        <img src={nerf4} alt="Nerf Rival Nemesis MXVII-10K" title='Nerf Rival Nemesis MXVII-10K'/>
                        <h3>Nerf Rival Nemesis MXVII-10K</h3>
                        <h3>$850</h3>
                        <button onClick={() =>props.addBasket('nerf4')}  >Add to Cart</button>
                    </div>

                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>
                    <div >
                        <img src={evilminion} alt="Evil Minion" title='evil minion'/>
                        <h3>Evil Minion</h3>
                        <h3>$39,08</h3>
                        <button onClick={() =>props.addBasket('evilminion')} >Add to Cart</button>
                    </div>
                    </Paper>
                </Grid>
                <Grid item xs>
                    <Paper className={classes.paper}>
                    <div >
                        <img src={babygroot} alt="Baby Groot" title='baby groot'/>
                        <h3>Baby Groot</h3>
                        <h3>$42,78</h3>
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