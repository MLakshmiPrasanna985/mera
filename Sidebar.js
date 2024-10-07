import React from 'react';
import "./mystyles.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {IconButton} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroutpAddIcon from "@mui/icons-material/GroupAdd";
import NightlightIcon from "@mui/icons-material/Nightlight";
import LightModeIcon from "@mui/icons-material/LightMode";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import SearchIcon from '@mui/icons-material/Search';
import ConversationsItem from "./ConversationsItem";
function Sidebar() {
  return (
    <div className='sidebar-container'>
      <div className='sb-header'>
        <div>
          <IconButton>
            <AccountCircleIcon/>
          </IconButton>
        </div>

        <div>
         <IconButton>
          <PersonAddIcon/>
          </IconButton>
         <IconButton>
          <GroutpAddIcon/>
         </IconButton>
         <IconButton>
          <AddCircleIcon/>
         </IconButton>
         <IconButton>
          <NightlightIcon/>
         </IconButton>
        </div>
      </div>
      <div className='sb-search'>
        <IconButton>
          <SearchIcon/>
        </IconButton>
        
        <input placeholder='search' className="search-box"/>
      </div>
      <div className='sb-conversation'>
        <ConversationsItem/>
      </div>

    </div>

  )
}

export default Sidebar