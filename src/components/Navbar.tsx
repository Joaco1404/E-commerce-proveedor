import React, { useState } from "react";
import { Box, Typography, IconButton, Badge, Divider, Container, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import StarIcon from "@mui/icons-material/Star";

const Navbar: React.FC = () => {
    // Estado de cada menú desplegable
    const [categoryAnchorEl, setCategoryAnchorEl] = useState<null | HTMLElement>(null);
    const [offersAnchorEl, setOffersAnchorEl] = useState<null | HTMLElement>(null);
    const [storesAnchorEl, setStoresAnchorEl] = useState<null | HTMLElement>(null);
    const [brandsAnchorEl, setBrandsAnchorEl] = useState<null | HTMLElement>(null);

    // Controladores para alternancias desplegables
    const handleCategoryClick = (event: React.MouseEvent<HTMLElement>) => {
        setCategoryAnchorEl(event.currentTarget);
    };
    const handleOffersClick = (event: React.MouseEvent<HTMLElement>) => {
        setOffersAnchorEl(event.currentTarget);
    };
    const handleStoresClick = (event: React.MouseEvent<HTMLElement>) => {
        setStoresAnchorEl(event.currentTarget);
    };
    const handleBrandsClick = (event: React.MouseEvent<HTMLElement>) => {
        setBrandsAnchorEl(event.currentTarget);
    };

    // Funciones para cerrar menús desplegables
    const handleClose = () => {
        setCategoryAnchorEl(null);
        setOffersAnchorEl(null);
        setStoresAnchorEl(null);
        setBrandsAnchorEl(null);
    };

    return (
        <Box className="bg-white">
            <Container maxWidth={"xl"}>
                <Box className="flex flex-warp items-center justify-between bg-white p-2 shadow-md">
                    {/* Sección izquierdo - Menú desplegable de categorías */}
                    <Box className="flex items-center bg-blue-700 p-2 w-full md:w-auto">
                        <IconButton className="text-white">
                            <MenuIcon />
                        </IconButton>
                        <Typography className="text-white ml-2">Seleccionar categorías</Typography>
                        <IconButton className="text-white">
                            <ExpandMoreIcon />
                        </IconButton>
                        {/* Selección de menú desplegable de categorías */}
                        <Menu anchorEl={categoryAnchorEl} open={Boolean(categoryAnchorEl)} onClose={handleCategoryClick}>
                            <MenuItem onClick={handleClose}>Categoría 1</MenuItem>
                            <MenuItem onClick={handleClose}>Categoría 2</MenuItem>
                            <MenuItem onClick={handleClose}>Categoría 3</MenuItem>
                        </Menu>
                    </Box>

                    {/* Sección medio - Navegación de enlaces */}
                    <Box className="flex flex-wrap items-center space-x-4 mt-2 md:mt-0 w-full md:w-auto">
                        <Typography component="a" href="#" className="text-gray-700">HOME</Typography>

                        {/* Menú desplegable de ofertas */}
                        <Typography component="a" href="#" className="text-gray-700 flex items-center" onClick={handleOffersClick}>Ofertas
                            <ExpandMoreIcon className="ml-1" fontSize="small" />
                        </Typography>
                        <Menu anchorEl={offersAnchorEl} open={Boolean(offersAnchorEl)} onClose={handleOffersClick}>
                            <MenuItem onClick={handleClose}>Oferta 1</MenuItem>
                            <MenuItem onClick={handleClose}>Oferta 2</MenuItem>
                            <MenuItem onClick={handleClose}>Oferta 3</MenuItem>
                        </Menu>

                        {/* Menú desplegable de tiendas */}
                        <Typography component="a" href="#" className="text-gray-700 flex items-center" onClick={handleStoresClick}>
                            Tiendas
                            <ExpandMoreIcon className="ml-1" fontSize="small" />
                        </Typography>
                        <Menu anchorEl={storesAnchorEl} open={Boolean(storesAnchorEl)} onClose={handleStoresClick}>
                            <MenuItem onClick={handleClose}>Tienda 1</MenuItem>
                            <MenuItem onClick={handleClose}>Tienda 2</MenuItem>
                            <MenuItem onClick={handleClose}>Tienda 3</MenuItem>
                        </Menu>

                        {/* Menú desplegable de marcas */}
                        <Typography component="a" href="#" className="text-gray-700 flex items-center" onClick={handleBrandsClick}>
                            Marcas
                            <ExpandMoreIcon className="ml-1" fontSize="small" />
                        </Typography>
                        <Menu anchorEl={brandsAnchorEl} open={Boolean(brandsAnchorEl)} onClose={handleBrandsClick}>
                            <MenuItem onClick={handleClose}>Marca 1</MenuItem>
                            <MenuItem onClick={handleClose}>Marca 2</MenuItem>
                            <MenuItem onClick={handleClose}>Marca 3</MenuItem>
                        </Menu>

                    
                {/*Productos en descuento*/}
                <Typography component="a" href="#" className="text-gray-700 flex items-center">
                    Productos en descuento
                    <StarIcon className="text-yellow-500 ml-1" fontSize="small"/>
                </Typography>
                    </Box>

            {/*Seccion derecho - Iconos y uso de acciones*/}
            <Box className="flex items-center space x-4 mt-2 md:mt-0 w-full md:w-auto justify-center">
            <Typography component="a" href="#" className="text-gray-700 flex items-center">
                Acceder/Registrar
            </Typography>
            <Divider orientation="vertical" flexItem className="border-gray-300" />
            <IconButton className="text-gray-700">
                <SyncAltIcon />
            </IconButton>
            <IconButton className="text-gray-700">
                                <FavoriteIcon />

                        </IconButton>
            <Divider orientation="vertical" flexItem className="border-gray-300" />
            <Box className="relative">
                <IconButton className="text-gray-700">
                    <Badge badgeContent={0} color="primary">
                                <ShoppingBagIcon />
                            </Badge>
                        </IconButton>
            </Box>





                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Navbar;