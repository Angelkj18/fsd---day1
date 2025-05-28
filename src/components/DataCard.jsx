import axios from 'axios';
import React, { useEffect, useState, } from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia, Grid } from '@mui/material';

// import {Card,CardContent,CardMedia,CardActionArea,Typography} from '@mui/material'

const DataCard = () => {
    var[pro,setpro]=useState([]);
    useEffect(()=>{
        axios
            .get("https://fakestoreapi.com/products")
            .then((res)=>{
                console.log(res.data);
                setpro(res.data)
            }).catch((err)=>console.log(err));
    },[]);
    return (
        <div>
             <Grid container spacing={2}>
                {pro.map((val,i)=>{
                    return (
                        <Grid size={{xs:12 ,sm:6, md:4}}>
                            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={val.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {val.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {val.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card> </Grid>
                    )
                })}
             </Grid>
        </div>
    )
}
export default DataCard;
