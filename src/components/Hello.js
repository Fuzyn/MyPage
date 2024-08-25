import {Card, CardActions, CardContent, Grid, LinearProgress, Typography} from "@mui/material";
import {LoadingButton} from "@mui/lab";
import {ArrowRightOutlined} from "@mui/icons-material";
import {useEffect, useState} from "react";
import "./Hello.css"

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
                setTimeout(() => props.showPortfolio(), 1000)
            }
        }
    }, [fakeProgress, props])

    return <Grid id="hello-page" minHeight="100vh">
        <Card className={`hello-card-${fakeProgress < 100 ? 'show' : 'hide'}`} variant="outlined" sx={{backgroundColor: "rgba(0,0,0,0.4)", color: "white"}}>
            <CardContent>
                <Typography variant="h1" textAlign="center" fontWeight="bold" sx={{textShadow: "7px 7px #000"}}>Hi!</Typography>
                <Typography variant="h5" textAlign="center">I'm Michał</Typography>
                <Typography variant="h5" textAlign="center">Click and see my CV and portfolio</Typography>
            </CardContent>
            <CardActions sx={{justifyContent: "center"}}>
                <LoadingButton
                    variant="contained"
                    sx={{minWidth: "200px"}}
                    onClick={() => loadResume()}
                    loading={fakeProgress > 0}
                >
                    <ArrowRightOutlined fontSize="large"/>
                </LoadingButton>
            </CardActions>
            {fakeProgress > 0 && <LinearProgress variant="determinate" value={fakeProgress}/>}
        </Card>
    </Grid>
}

export default Hello;