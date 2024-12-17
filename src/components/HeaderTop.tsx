import React, { MouseEvent } from 'react';
import { Box, Typography, IconButton, Menu, MenuItem, Button, Container } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FlagIcon from '@mui/icons-material/Flag';

export default function HeaderTop() {
    const [anchorElCurrency, setAnchorElCurrency] = React.useState<null | HTMLElement>(null);
    const [anchorEllanguage, setAnchorEllanguage] = React.useState<null | HTMLElement>(null);

    const handleCurrencyMenuClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorElCurrency(event.currentTarget);
    };

    const handleCurrencyMenuClose = () => {
        setAnchorElCurrency(null);
    };

    const handleLanguageMenuClick = (event: MouseEvent<HTMLElement>) => {
        setAnchorEllanguage(event.currentTarget);
    };

    const handleLanguageMenuClose = () => {
        setAnchorEllanguage(null);
    };

    return (
        <Box className={"bg-white"}>
            <Container maxWidth={"xl"}>
            <Box className="flex flex-col md:flex-row justify-between items-center p-2 border-b border-white">
            {/* Sección izquierda */}
            <Box className="flex items-center mb-2 md:mb-0">
                <PhoneIcon className="text-[#1455ac] mr-2" />
                <Typography>+8801xxxxxxxxxx</Typography>
            </Box>

            {/* Sección derecha */}
            <Box className="flex items-center space-x-4">
                {/* Selección de moneda */}
                <Box className="flex items-center space-x-1">
                    <Button
                        className="py-0 text-[#1455ac]"
                        aria-controls="currency-menu"
                        aria-haspopup="true"
                        onClick={handleCurrencyMenuClick}
                        endIcon={<ArrowDropDownIcon />}
                    >
                        $
                    </Button>
                    <Menu
                        id="currency-menu"
                        anchorEl={anchorElCurrency}
                        open={Boolean(anchorElCurrency)}
                        onClose={handleCurrencyMenuClose}
                    >
                        <MenuItem onClick={handleCurrencyMenuClose}>ARS $</MenuItem>
                        <MenuItem onClick={handleCurrencyMenuClose}>USD $</MenuItem>
                        <MenuItem onClick={handleCurrencyMenuClose}>EUR €</MenuItem>
                    </Menu>
                </Box>

                {/* Selector de lenguaje */}
                <Box className="flex items-center space-x-1">
                    <IconButton onClick={handleLanguageMenuClick}>
                        <FlagIcon fontSize="small" />
                    </IconButton>
                    <Typography>Español</Typography>
                    <IconButton onClick={handleLanguageMenuClick}>
                        <ArrowDropDownIcon />
                    </IconButton>
                    <Menu
                        id="language-menu"
                        anchorEl={anchorEllanguage}
                        open={Boolean(anchorEllanguage)}
                        onClose={handleLanguageMenuClose}
                    >
                        <MenuItem onClick={handleLanguageMenuClose}>Español</MenuItem>
                        <MenuItem onClick={handleLanguageMenuClose}>Inglés</MenuItem>
                        <MenuItem onClick={handleLanguageMenuClose}>Francés</MenuItem>
                    </Menu>
                </Box>

                {/* Botón vendedor */}
                <Typography>Conviértete en un vendedor</Typography>
            </Box>
        </Box>
            </Container>
        </Box>
    );
}