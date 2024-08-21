import {Card, CardActions, CardContent, Grid, LinearProgress, Typography} from "@mui/material";
import {LoadingButton} from "@mui/lab";
import {ArrowRightAltOutlined} from "@mui/icons-material";
import {useEffect, useState} from "react";

const Hello = (props) => {
    const [fakeProgress, setFakeProgress] = useState(0)

    const loadResume = () => {
        setFakeProgress(10)
    }

    useEffect(() => {
        if (fakeProgress > 0) {
            if (fakeProgress < 100) {
                const timerId = setInterval(() => setFakeProgress(fakeProgress + 10), 100);

                return () => clearInterval(timerId);
            } else {
                setTimeout(() => props.showPortfolio(), 300)
            }
        }
    }, [fakeProgress])

    return <Grid minHeight="100vh" alignContent="center">
        <Card variant="outlined" sx={{backgroundColor: "rgba(0,0,0,0.4)", color: "white"}}>
            <CardContent>
                <Typography variant="h1" textAlign="center" sx={{textShadow: "7px 7px #000"}}>Hi!</Typography>
                <Typography variant="subtitle1" textAlign="center">My name is Michał Wierzbicki</Typography>
                <Typography variant="subtitle1" textAlign="center">Click on the button below to view my CV and portfolio</Typography>
            </CardContent>
            <CardActions sx={{justifyContent: "center"}}>
                <LoadingButton
                    variant="contained"
                    sx={{minWidth: "200px"}}
                    onClick={() => loadResume()}
                    loading={fakeProgress > 0}
                >
                    <ArrowRightAltOutlined/>
                </LoadingButton>
            </CardActions>
            {fakeProgress > 0 && <LinearProgress variant="determinate" value={fakeProgress}/>}
        </Card>
    </Grid>
}

export default Hello;