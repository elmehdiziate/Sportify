import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import AssessmentIcon from '@mui/icons-material/Assessment';


export const SidebarData = [
 
  {
    title: "Home",
    path: "/home",
    icon: <HomeIcon color="white" />,
    cName: "nav-text",
  },
  {
    title: "booking",
    path: "/booking",
    icon: <BookmarkAddIcon color="white" />,
    cName: "nav-text",
  },
  {
    title: "Session",
    path: "/session",
    icon: <AssessmentIcon color="white" />,
    cName: "nav-text",
  },



];
