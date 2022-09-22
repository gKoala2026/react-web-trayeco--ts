import * as React from "react"
import { Box, Grid, Typography } from "@mui/material"
import { Container } from "@mui/system"
import ClientCard from "../components/ClientCard"
import "@fontsource/space-grotesk";
// import "./index.css"

const ClientCardProps = {
    avatar:'Avatar2.png',
    name: "Suki Wealthmanager",
    title: "MyCo",
};

const Header:React.FC = () => {
    return(
        <Box bgcolor='#828282' width='100%' color='#fff' py={2}>
            <Container>
                <Grid container>
                    <Grid item xs={12}>
                        <Grid container spacing={6} alignItems='center'>
                            <Grid item>
                                <Typography fontSize={24} fontWeight='bold' fontFamily='Space Grotesk'>Trayecto</Typography>
                            </Grid>
                            <Grid item flexGrow={1}>
                                <Grid container spacing={6}>
                                    <Grid item>
                                        <Typography fontSize={16} fontWeight='bold'>Downstop Wealth</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item>
                                <Grid container>
                                    <ClientCard {...ClientCardProps} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default Header