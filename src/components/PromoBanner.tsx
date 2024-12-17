import { Box, Container, Grid, IconButton, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";

export default function Promobanner() {
    return <Box className="bg-[#1455ac50]">
        <Container maxWidth={"xl"}>
            <Grid container spacing={3}>
                <Grid item xs={12}>
<Box component={"div"} className="flex justify between items-center py-2 text-white">
<IconButton className="text-white text-lg md:text-xL">
    <Close/>
</IconButton>
<Typography className="text-sm md:text-base lg:text-lg text-start md:text-center w-full" variant="body2">
Obtenga un 50% de descuento en todos los productos desde 06/2024 hasta 12/2024
</Typography>
</Box>
                </Grid>
            </Grid>
        </Container>
    </Box>
}