import React from 'react';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import GridViewIcon from '@mui/icons-material/GridView';

export const MenuData = [
    {
        title: "Summarize",
        icon: <StarOutlineIcon id='menu-option-icon'/>,
        link: "/summarize"
    },
    {
        title: "Summary History",
        icon: <SearchIcon id='menu-option-icon'/>,
        link: "/summaryHistory"
    },
    {
        title: "User",
        icon: <PersonIcon id='menu-option-icon'/>,
        link: "/user"
    },
    {
        title: "Settings",
        icon: <SettingsIcon id='menu-option-icon'/>,
        link: "/settings"
    },
    {
        title: "Our Website",
        icon: <GridViewIcon id='menu-option-icon'/>,
        link: "/website"
    }
]