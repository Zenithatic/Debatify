import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
function Search() {
    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 800, backgroundColor: "#1a1a1a",}}
        >
            <IconButton sx={{ p: '10px', color: "white" }} aria-label="menu">
                <MenuIcon />
            </IconButton>
            <InputBase
                sx={{ ml: 1, flex: 1, color: "white" }}
                placeholder="Search Debatify"
                inputProps={{ 'aria-label': 'search debatify' }}
            />
            <IconButton type="button" sx={{ p: '10px', color: "white"  }} aria-label="search">
                <SearchIcon />
            </IconButton>
            
        </Paper>
    );
}

export default Search;