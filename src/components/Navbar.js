import React, {useState} from "react";
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
    ArrowBack,
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
        listText: "Home"
    },
    {
        listIcon: <AssignmentInd/>,
        listText: "Resume"
    },
    {
        listIcon: <Apps />,
        listText: "Portfolio"
    },
    {
        listIcon: <ContactMail/>,
        listText: "Contacts"
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
                        <ListItem button key={key}  onClick={toggleSlider("right",false)}>
                            <ListItemIcon className={classes.menuItem}>
                                {item.listIcon}
                            </ListItemIcon>
                            <ListItemText className={classes.menuItem} primary={item.listText}>

                            </ListItemText>
                        </ListItem>
                    ))
                }

            </List>
        </Box>)


    return (
        <>

            <Box component={"nav"}>
                <AppBar position={"static"} style={{background: "#222"}}>
                    <Toolbar>
                        <IconButton onClick={toggleSlider("right",true)}>
                            <ArrowBack style={{color: "tomato"}}/>
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
                        </MobileRightSideDrawer>

                    </Toolbar>
                </AppBar>
            </Box>
        </>

    )
}
export default Navbar;