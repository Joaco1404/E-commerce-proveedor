import React from "react";
import { Box, Button, InputBase, IconButton, Menu, MenuItem, Typography, Container } from "@mui/material";
import  SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Header: React.FC = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box className="bg-white">
            <Container maxWidth={"xl"}>
            <Box className="flex flex-col lg:flex-row items center justify-between p-4">
            {/*Seccion izquierdo - Logo*/}
            <Box className="flex items-center mb-4 lg:mb-0">
                <Box className="flex items-center">
                    <Box className="bg-[#1455ac] p-2 rounded">
                        <ShoppingCartIcon className="text-white text-2x1" />
                    </Box>
                    <Typography variant="h4" className="font-bold text-[#1455ac] ml-2">
                        6Valley
                    </Typography>
                </Box>
            </Box>

            {/*Seccion medio - Barra de busqueda*/}
            <Box className="flex items-center w-full lg:w-1/2 mb-4 lg:mb-0">
                <Box className="flex border rounded w-full">
                    <Button
                    className="flex items-center px-4 border-r max-w-[185px] w-full text-[#1455ac5]"
                    aria-controls="category-menu"
                    aria-haspopup="true"
                    onClick={handleMenuClick}
                    endIcon={<ArrowDropDownIcon />}
                    >
                        Todas las categorias
                    </Button>
                    <Menu
                    id="category-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    >
                        <MenuItem onClick={handleMenuClose}>Categoria 1</MenuItem>
                        <MenuItem onClick={handleMenuClose}>Categoria 2</MenuItem>
                    </Menu>
                    <InputBase
                    placeholder="Buscar por items..."
                    className="w-full px-4 py-2 outline-none"
                    />
                    <IconButton type="submit" className="bg-[#1455ac] text-white px-4 rounded-none">
                        <SearchIcon />
                    </IconButton>
                </Box>
        </Box>

        {/*Seccion derecho - Boton Promo*/}
        <Button className="bg-[#1455ac] text-white px-6 py-2 rounded text-center">
            <Typography variant="body1" className="font-bold">
                Obtén un 50% de descuento
            </Typography>
            <Typography variant="body2">Descargue la app ahora</Typography>
        </Button>
        </Box>
            </Container>
        </Box>
    );
};

export default Header;