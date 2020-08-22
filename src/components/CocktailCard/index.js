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
    maxWidth: "100vw",
  },
  media: {
    height: "40vh",
  },
});

function CocktailTab({ data }) {
  const classes = useStyles();
  console.log(data);

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
            <Typography gutterBottom variant="h4" component="h2">
              {data["strDrink"]}
            </Typography>
            <span style={{ fontStyle: "italic", fontSize: "1rem" }}>
              {data["strAlcoholic"]}
            </span>

            <Typography variant="body2" color="textSecondary" component="p">
              {data["strInstructions"]}
            </Typography>
            <Typography gutterBottom variant="h6" component="h2">
              Ingredients
            </Typography>
            {/* <Typography gutterBottom variant="ul" component="li"> */}
            {/* <ol> */}
            {/* <li>1 sasdasdasda</li> */}
            {/* <li>2 dsadasd </li> */}
            {/* <li>3d as dsad sad asd </li> */}
            {/* <li>4asd sad sad sa</li> */}
            {/* </ol> */}
            {/* </Typography> */}
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}
export default CocktailTab;
