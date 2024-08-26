import React from "react";
import {
    Timeline,
    TimelineConnector,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from "@mui/lab";
import {ConstructionOutlined, EmojiPeopleOutlined, LaptopMac, TerminalOutlined} from "@mui/icons-material";
import {Grid} from "@mui/material";

const PageTimeline = ({portfolioPage, setPortfolioPage}) => {
    return <Grid item md={1} sm={1} xs={1} data-aos="zoom-in">
        <Timeline position="left" sx={{height: "100vh", margin: 0, padding: 0}}>
            <TimelineItem sx={{height: {xs: "25%", sm: "25%"}, display: {xs: "flex", sm: "flex", md: "none"}, justifyContent: "flex-end"}}>
                <TimelineSeparator>
                    <TimelineConnector/>
                    <TimelineDot color={portfolioPage === "about" ? "primary" : "grey"}>
                        <EmojiPeopleOutlined cursor="pointer" onClick={() => setPortfolioPage("about")}/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineOppositeContent sx={{display: "none"}}/>
            </TimelineItem>
            <TimelineItem sx={{height: {xs: "25%", sm: "25%", md: "33.3%"}, justifyContent: "flex-end"}}>
                <TimelineSeparator>
                    <TimelineConnector/>
                    <TimelineDot color={portfolioPage === "experience" ? "primary" : "grey"}>
                        <ConstructionOutlined cursor="pointer" onClick={() => setPortfolioPage("experience")}/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineOppositeContent sx={{display: "none"}}/>
            </TimelineItem>
            <TimelineItem sx={{height: {xs: "25%", sm: "25%", md: "33.3%"}, justifyContent: "flex-end"}}>
                <TimelineSeparator>
                    <TimelineConnector/>
                    <TimelineDot color={portfolioPage === "skills" ? "primary" : "grey"}>
                        <TerminalOutlined cursor="pointer" onClick={() => setPortfolioPage("skills")}/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineOppositeContent sx={{display: "none"}}/>
            </TimelineItem>
            <TimelineItem sx={{height: {xs: "25%", sm: "25%", md: "33.3%"}, justifyContent: "flex-end"}}>
                <TimelineSeparator>
                    <TimelineConnector/>
                    <TimelineDot color={portfolioPage === "examples" ? "primary" : "grey"}>
                        <LaptopMac cursor="pointer" onClick={() => setPortfolioPage("examples")}/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
                <TimelineOppositeContent sx={{display: "none"}}/>
            </TimelineItem>
        </Timeline>
    </Grid>
}

export default PageTimeline;