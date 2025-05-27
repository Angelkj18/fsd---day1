import React from "react";
import {Card,CardContent,CardMedia,CardActionArea,Typography} from '@mui/material'
const DataCard = () => {
    return (
        <div>
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pexels.com%2Fsearch%2Flizard%2F&psig=AOvVaw1CK_c9jY8WtUmFb6Oj-1UN&ust=1748421011135000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDwmfydw40DFQAAAAAdAAAAABAE"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        </CardActionArea>
        </Card>
        </div>
    )
}
export default DataCard;

// b=2     b=3     b=4                     a+c=5
//c=4      c=6                          a+c=7
//
