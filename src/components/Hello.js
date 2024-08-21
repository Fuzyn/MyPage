import {Card, CardActions, CardContent, Grid, Typography} from "@mui/material";
import {LoadingButton} from "@mui/lab";
import {ArrowRightAltOutlined} from "@mui/icons-material";



const Hello = (props) => {
    return <Grid minHeight="100vh" alignContent="center">
        <Card variant="outlined" sx={{backgroundColor: "rgba(0,0,0,0.4)", color: "white"}}>
            <CardContent>
                <Typography variant="h1" textAlign="center" sx={{textShadow: "7px 7px #000"}}>Hi!</Typography>
                <Typography variant="subtitle1" textAlign="center">My name is Michał Wierzbicki</Typography>
                <Typography variant="subtitle1" textAlign="center">Click on the button below to view my CV and portfolio</Typography>
            </CardContent>
            <CardActions sx={{justifyContent: "center"}}>
                <LoadingButton variant="outlined" sx={{minWidth: "200px"}} onClick={() => props.showPortfolio()}>
                    <ArrowRightAltOutlined/>
                </LoadingButton>
            </CardActions>
        </Card>
    </Grid>
}

export default Hello;