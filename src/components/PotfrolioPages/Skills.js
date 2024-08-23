import React from "react";
import {Grid, List, ListItem, ListItemText, Typography} from "@mui/material";

const Skills = () => {
    return <Grid className="portfolio-page-wrapper">
        <List sx={{ listStyle: "circle", marginLeft: "30px" }}>
            <ListItem data-aos="fade-left">
                <ListItemText>
                    <Typography variant="h3">Skills and achievements</Typography>
                </ListItemText>
            </ListItem>
            <ListItem sx={{ display: "list-item" }} data-aos="fade-left" data-aos-delay={300}>
                <ListItemText primary="English B2 level" />
            </ListItem>
            <ListItem sx={{ display: "list-item" }} data-aos="fade-left" data-aos-delay={400}>
                <ListItemText primary="Category B driving license" />
            </ListItem>
            <ListItem sx={{ display: "list-item" }} data-aos="fade-left" data-aos-delay={500}>
                <ListItemText primary="Ability to organize work independently, solve problems and think analytically" />
            </ListItem>
            <ListItem sx={{ display: "list-item" }} data-aos="fade-left" data-aos-delay={600}>
                <ListItemText primary="Work ethic, the ability to count quickly and work under pressure" />
            </ListItem>
            <ListItem sx={{ display: "list-item" }} data-aos="fade-left" data-aos-delay={700}>
                <ListItemText primary="Knowledge of the programs:  Statistica, CorelDRAW, GIMP, Visual Studio Code." />
            </ListItem>
        </List>
    </Grid>
}

export default Skills;