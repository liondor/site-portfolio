import React from "react";
import {makeStyles} from "@material-ui/core/styles"
import {Typography, Box} from "@material-ui/core"
import Navbar from "./Navbar";

const useStyles = makeStyles(theme =>({
    mainContainer: {
        background: "#233"
    },
    timeLine: {
        position:"relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before":{
            content:"''",
            position:"absolute",
            height:"100%",
            border:"1px solid tan",
            right: "40px",
            top: 0
        },
        "&:after": {
            content:"''",
            display: "table",
            clear: "both"
        },
        [theme.breakpoints.up("md")]:{
            padding: "2rem",
            "&:before": {
                left:"calc( 50% - 1px )",
                right:"auto"
            }
        }
    },
        timeLineItem: {
            padding: "1rem",
            borderBottom: "2px solid tan",
            position: "relative",
            margin: "1rem 3rem 1rem 1rem",
            clear: "both",
            "&:after": {
                content:"''",
                position:"absolute"
            },
            "&:before": {
                content:"''",
                position:"absolute",
                right:"-0.625rem",
                top:"calc( 50% - 5px)",
                borderStyle:"solid",
                borderColor: "tomato tomato transparent transparent",
                borderWidth:"0.625rem",
                transform: "rotate(45deg)"
            },
            [theme.breakpoints.up("md")]: {
                width:"44%",
                margin:"1rem",
                "&:nth-of-type(2n)": {
                    float: "right",
                    margin: "1rem",
                    borderColor: "tan"
                },
                "&:nth-of-type(2n):before": {
                    right:"auto",
                    left: "-0.625rem",
                    borderColor: "transparent transparent tomato tomato"
                }
            }
        },
        timeLineYear: {
            textAlign: "center",
            maxWidth: "9.375rem",
            margin: "0 3rem 0 auto",
            fontSize: "1.8rem",
            background: " tomato",
            color:"white",
            lineHeight:1,
            padding: "0.5rem 0 1rem",
            "&:before": {
                display: "none"
            },
            [theme.breakpoints.up("md")]: {
                textAlign: "center",
                margin: "0 auto",
                "&:nth-of-type(2n)": {
                    float:"none",
                    margin:"0 auto"
                },
                "&:nth-of-type(2n):before": {
                    display:"none"
                }
            }
        },
        heading: {
            color: "tomato",
            padding: "3rem 0",
            textTransform: "uppercase"
        },
        subHeading:{
            color:"white",
            padding:"0",
            textTransform: "uppercase"
        }
}
))

const Resume = () => {
    const classes = useStyles();
    return (
        <>
            <Navbar/>
            <Box component={"header"}
                 className={classes.mainContainer}>
                <Typography variant={"h4"}
                            className={classes.heading}
                            align={"center"}>
                    expériences professionnelles
                </Typography>
                <Box component={"div"} className={classes.timeLine}>
                    <Typography
                        variant={"h2"}
                        className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2019
                    </Typography>
                    <Box component={"div"}
                         className={classes.timeLineItem}
                    >
                        <Typography variant={"h5"}
                                    align={"center"}
                                    className={classes.subHeading}
                        >
                            Développeur Frontend
                        </Typography>
                        <Typography variant={"body1"}
                                    align={"center"}
                                    style={{color:"tomato"}}>
                            Université des Antilles
                        </Typography>
                        <Typography variant={"subtitle1"}
                                    align={"center"}
                                    style={{color:"tan"}}>
                            Conception et développement d'un site web découplé pour la DSIN. Ce projet avait pour but de développer un site web pouvant être facilement édité par des personnes ayant peu/pas d'expérience en développement web (via Drupal), mais ayant également un design Responsive et étant construit avec une technologie web récente (React) afin d'assurer sa pérennité.
                        </Typography>

                    </Box>


                    <Typography
                        variant={"h2"}

                        className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                    >
                        2018
                    </Typography>
                    <Box component={"div"}
                         className={classes.timeLineItem}
                    >
                        <Typography variant={"h5"}
                                    align={"center"}
                                    className={classes.subHeading}
                        >
                            Développeur Frontend
                        </Typography>
                        <Typography variant={"body1"}
                                    align={"center"}
                                    style={{color:"tomato"}}>
                            Help Invest Assurance
                        </Typography>
                        <Typography variant={"subtitle1"}
                                    align={"center"}
                                    style={{color:"tan"}}>
                            Conception et développement d'un site web vitrine pour la société H.I.A. .  Le but de ce projet était de fournir un outil de marketing supplémentaire à H.I.A. . Le site présente les différents services proposés par H.I.A. et offre un moyen de contacter le dirigeant de la société.
                        </Typography>
                    </Box>

                </Box>

            </Box>
            <Box component={"header"}
                 className={classes.mainContainer}>
                <Typography variant={"h4"}
                            className={classes.heading}
                            align={"center"}>
            Formation
                </Typography>
                <Box component={"div"} className={classes.timeLine}>
                    <Typography
                        variant={"h2"}
                        className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                        2018-2020
                    </Typography>
                    <Box component={"div"}
                         className={classes.timeLineItem}
                    >
                        <Typography variant={"h5"}
                                    align={"center"}
                                    className={classes.subHeading}
                        >
                            Maitre ès science
                        </Typography>
                        <Typography variant={"body1"}
                                    align={"center"}
                                    style={{color:"tomato"}}>
                            Université du Québec à Chicoutimi
                        </Typography>
                        <Typography variant={"subtitle1"}
                                    align={"center"}
                                    style={{color:"tan"}}>
                            Formation orientée Big Data (BDD réparties, Business Intelligence, Forage de données & IA), Sécurité informatique et pratiques d'ingénierie logiciel (Gestion de projet, Génie Logiciel)
                        </Typography>

                    </Box>


                    <Typography
                        variant={"h2"}

                        className={`${classes.timeLineYear} ${classes.timeLineItem}`}
                    >
                        2016-2020
                    </Typography>
                    <Box component={"div"}
                         className={classes.timeLineItem}
                    >
                        <Typography variant={"h5"}
                                    align={"center"}
                                    className={classes.subHeading}
                        >
                            diplôme d’Ingénieur de l'École d'ingénieurs du Littoral Côte d'Opale de l'Université du
                            Littoral, spécialité Informatique
                        </Typography>
                        <Typography variant={"body1"}
                                    align={"center"}
                                    style={{color:"tomato"}}>
                            École d'Ingénieur du Littoral Côte d'Opale
                        </Typography>
                        <Typography variant={"subtitle1"}
                                    align={"center"}
                                    style={{color:"tan"}}>
                            Formation en informatique polyvalente, avec en supplément des cours de management et de langues
                        </Typography>
                    </Box>

                </Box>

            </Box>
        </>
    )
}
export default Resume;