import React from "react"
import {
    Typography,
    Avatar,
    Grid,
    Box
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import myAvatar from "../IMG/avatar.png"
import Typed from "react-typed"
const useStyles = makeStyles(theme=> ({
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
    title: {
        color: "tomato"
    },
    subtitle: {
        color: "tan",
        marginBottom: "3rem"
    },
    typedContainer: {
        position:"absolute",
        top:"50%",
        left:"50%",
        transform: "translate(-50%, -50%)",
        width: "100vw",
        textAlign:"center",
        zIndex:1
    }
}))
const Header = () => {
    const classes = useStyles();
    return (
        <Box className={classes.typedContainer}>
            <Grid container justify={"center"} >

            <Avatar className={classes.avatar} src={myAvatar} alt={"Johen SYLVESTRE"} />
            </Grid>

            <Typography className={classes.title} variant={"h4"}>
                <Typed strings={["Johen SYLVESTRE"]} typeSpeed={40}></Typed>
            </Typography>
            <Typography className={classes.subtitle}variant={"h5"}>
                <Typed strings={["Ingénieur en Informatique","Développement Web Fullstack", "Développement de logiciel"]} typeSpeed={40} backSpeed={60} loop></Typed>
            </Typography>
        </Box>
    )
}

export default Header;