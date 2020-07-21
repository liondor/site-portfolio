import React from "react"
import Navbar from "./Navbar";
import {makeStyles} from "@material-ui/styles"
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from "@material-ui/core"
import techCV from "../IMG/techPortfolio.png"
import corona from "../IMG/corona.png"

const useStyles = makeStyles({
    mainContainer: {
        background: "#233",
        height: "100%"
    },
    cardContainer: {
        maxWidth: 345,
        margin: "5rem auto"
    }
});
const portfolioItems = [
{

    titre: "Site portfolio",
    description: "Réalisé avec React, la librairie material-ui, Sass, Javascript, CSS3, HTML",
    image:techCV,
    link:"#"

},
{

    titre: "Covid tracker",
    description: "Site utilisant une API pour afficher des statistiques autour du Covid-19. Réalisé avec React, Material-ui, et reactjs-chart-2",
    image:corona,
    link:"liondor.github.io/corona"

}
]


const Portfolio = () => {
    const classes = useStyles();
    return (

        <Box component={"div"} className={classes.mainContainer}>

            <Navbar/>
            <Grid container justify={"center"}>
                {
                    portfolioItems.map((item,key) => {
                        return (<Grid item xs={12} sm={8} md={6} key={key}>
                            <Card className={classes.cardContainer}>
                                <CardActionArea>
                                    <CardMedia
                                        component={"img"}
                                        alt={"Project 1"}
                                        height={"140"}
                                        image={item.image}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant={"h5"}>
                                            {item.titre}
                                        </Typography>
                                        <Typography variant={"body2"} color={"textSecondary"} component={"p"}>
                                            {item.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>

                                <CardActions>
                                    <Typography component={"a"} href={item.link} style={{textDecoration:"none"}}>
                                        <Button size={"small"} color={"primary"}>
                                            Visiter
                                        </Button>
                                    </Typography>
                                </CardActions>
                            </Card>
                        </Grid>);

                    })
                }



            </Grid>

        </Box>

    );

}


export default Portfolio;