import {Button, Dialog,DialogTitle,IconButton, Typography} from '@mui/material';
import { UseEditDialog } from '../../context/EditDialogContext';
import AddEditForm from './AddEditForm';
import CloseIcon from '@mui/icons-material/Close';
import { UseTask } from '../../context/TaskContext';
import { UseUser } from '../../context/UserContext';
import { Link } from 'react-router-dom';
import Dashboard from '../dashbord/Dashbord';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function UserMenu({open,anchorEl,handleClose}){
    const {logedIn}=UseUser();
    console.log(logedIn);
    return(
        <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        PaperProps={{
          sx: {
            width: 300,     
            maxHeight: 400, 
          },
        }}
      >
        {logedIn? <Dashboard/>:<Typography variant='h6' className='text-center'>log in please</Typography>}
      </Menu>
    )
}