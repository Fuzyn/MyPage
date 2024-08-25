import React from "react";
import {Timeline, TimelineConnector, TimelineDot, TimelineItem, TimelineSeparator} from "@mui/lab";
import {ConstructionOutlined, LaptopMac, TerminalOutlined} from "@mui/icons-material";
import {Grid} from "@mui/material";

const PageTimeline = ({portfolioPage, setPortfolioPage}) => {
    return <Grid item md={1} sm={1} xs={1} data-aos="zoom-in">
        <Timeline position="left" sx={{height: "100vh", margin: 0, padding: 0}}>
            <TimelineItem sx={{height: "33.3%"}}>
                <TimelineSeparator>
                    <TimelineConnector/>
                    <TimelineDot color={portfolioPage === "experience" ? "primary" : "grey"}>
                        <ConstructionOutlined cursor="pointer" onClick={() => setPortfolioPage("experience")}/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
            </TimelineItem>
            <TimelineItem sx={{height: "33.3%"}}>
                <TimelineSeparator>
                    <TimelineConnector/>
                    <TimelineDot color={portfolioPage === "skills" ? "primary" : "grey"}>
                        <TerminalOutlined cursor="pointer" onClick={() => setPortfolioPage("skills")}/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
            </TimelineItem>
            <TimelineItem sx={{height: "33.3%"}}>
                <TimelineSeparator>
                    <TimelineConnector/>
                    <TimelineDot color={portfolioPage === "examples" ? "primary" : "grey"}>
                        <LaptopMac cursor="pointer" onClick={() => setPortfolioPage("examples")}/>
                    </TimelineDot>
                    <TimelineConnector/>
                </TimelineSeparator>
            </TimelineItem>
        </Timeline>
    </Grid>
}

export default PageTimeline;