import React from 'react'
import {makeStyles} from "@material-ui/core"
import {BottomNavigation, BottomNavigationAction} from "@material-ui/core"
import LinkedIn from "@material-ui/icons/LinkedIn"

const useStyles = makeStyles({
    root: {
       "& .MuiBottomNavigationAction-root": {
           minWidth:0,
           maxWidth:250,
       },
        "& .MuiSvgIcon-root": {
           fill:"tan",
            "&:hover": {
               fill: "tomato",
                fontSize: "1.8rem"
            }
        }
    }
    });

const Footer = () => {
    const classes = useStyles();
    return (
        <a href="https://www.linkedin.com/in/johen-sylvestre-4b264a134/" target="_blank" rel="noopener noreferrer">

        <BottomNavigation width={"auto"} style={{background: "#222"}} >
            <BottomNavigationAction
                className={classes.root}
            style={{padding:0}}
            icon={<LinkedIn/>}
            />
        </BottomNavigation>
        </a>

    )
}
export default Footer;