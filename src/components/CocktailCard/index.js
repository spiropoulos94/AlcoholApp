import "./style.css";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: "50vw",
  },
  media: {
    height: "40vh",
  },
});

function CocktailTab({ data }) {
  const classes = useStyles();

  return (
    <Container style={{ display: "flex", justifyContent: "center" }}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={data["strDrinkThumb"]}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {data["strDrink"]}
            </Typography>

            <Typography variant="body2" color="textSecondary" component="p">
              {data["strInstructions"]}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}
export default CocktailTab;
