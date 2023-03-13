import React from 'react';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import GridViewIcon from '@mui/icons-material/GridView';

export const MenuData = [
    {
        title: "Summarize",
        icon: <StarOutlineIcon/>,
        link: "/summarize"
    },
    {
        title: "Summary History",
        icon: <SearchIcon/>,
        link: "/summaryHistory"
    },
    {
        title: "User",
        icon: <PersonIcon/>,
        link: "/user"
    },
    {
        title: "Settings",
        icon: <SettingsIcon/>,
        link: "/settings"
    },
    {
        title: "Our Website",
        icon: <GridViewIcon/>,
        link: "/website"
    }
]