import {Dialog,DialogTitle,IconButton} from '@mui/material';
import { UseEditDialog } from '../../context/EditDialogContext';
import AddEditForm from './AddEditForm';
import CloseIcon from '@mui/icons-material/Close';
import { UseTask } from '../../context/TaskContext';

export default function EditDialog(){
const{currentTask,setCurrentTask}=UseTask();
const{open,handleClose}=UseEditDialog();

    return(
        <Dialog onClose={()=>{handleClose();setCurrentTask('');}} open={open} className='!w-full m-0'>
        <DialogTitle >Edit Task</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon onClick={handleClose} />
          </IconButton>
       <AddEditForm mode='edit'/>
      </Dialog>
    )
}