import React, {useState} from "react";
import {Link} from "react-router-dom";
import Footer from "./Footer";
import {
    AppBar,
    Toolbar,
    ListItem,
    IconButton,
    ListItemText,
    ListItemIcon,
    Avatar,
    Divider,
    List,
    Typography,
    Box
} from "@material-ui/core";
import {
    Menu,
    AssignmentInd,
    Home,
    Apps,
    ContactMail
} from "@material-ui/icons"
import myAvatar from "../IMG/avatar.png";
import makeStyles from "@material-ui/core/styles/makeStyles";
import MobileRightSideDrawer from "@material-ui/core/Drawer"

const useStyles = makeStyles(theme => ({
    menuSliderContainer: {
        width: 250,
        background: "#511",
        height: "100%"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto",
        width: theme.spacing(13),
        height: theme.spacing(13)

    },
    menuItem: {
        color:"tan"
    }

}))
const menuItems = [
    {
        listIcon: <Home/>,
        listText: "Accueil",
        listPath: "/"

    },
    {
        listIcon: <AssignmentInd/>,
        listText: "CV",
        listPath: "/resume"
    },
    {
        listIcon: <Apps />,
        listText: "Portfolio",
        listPath: "/portfolio"

    },
    {
        listIcon: <ContactMail/>,
        listText: "Contacts",
        listPath: "/contacts"

    },


]

const Navbar = () => {
    const [state, setState] = useState({
        right: false,
    });
    const toggleSlider= ((slider, open) => ()=>{
        setState({...state,[slider]:open});
    });

    const classes = useStyles();
    const sideList =  slider => (
        <Box className={classes.menuSliderContainer}
             component={"div"}
        >
            <Avatar className={classes.avatar}
                    src={myAvatar}
                    alt={"Johen SYLVESTRE"}/>
            <Divider/>
            <List>
                {
                    menuItems.map((item,key) => (
                        <ListItem button key={key}
                                  component={Link}
                                  to={item.listPath}
                                  onClick={toggleSlider("right",false)}
                        >
                            <ListItemIcon className={classes.menuItem}>
                                {item.listIcon}
                            </ListItemIcon>
                            <ListItemText className={classes.menuItem} primary={item.listText}>

                            </ListItemText>
                        </ListItem>
                    ))
                }

            </List>

        </Box>

    )


    return (
        <>

            <Box component={"nav"}>
                <AppBar position={"static"} style={{background: "#222"}}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider("right",true)}>
                            <Menu style={{color: "tomato"}}/>
                        </IconButton>
                        <Typography variant={"h5"} style={{color: "tan"}}>
                            Portfolio
                        </Typography>
                        <MobileRightSideDrawer
                            anchor={"right"}
                            open={state.right}
                            onClose={toggleSlider("right", false)}
                        >
                            {sideList("right")}
                            <Footer/>

                        </MobileRightSideDrawer>

                    </Toolbar>
                </AppBar>

            </Box>
        </>

    )
}
export default Navbar;