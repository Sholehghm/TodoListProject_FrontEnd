import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { UseTask } from '../../context/TaskContext';
import { UseDeleteDialog } from '../../context/DeleteDialogContext';
import { deleteExistedTask } from '../../utils/taskAPI';
import { UseSnackbar } from '../../context/SnackbarContext';
import Loading from '../loading/Loading';

export default function DeleteDialog() {
    const{currentTask,setCurrentTask,getTasks,today,searchTitle,searchDate}=UseTask();
    const{deleteOpen,deleteHandleClose, route} = UseDeleteDialog();
    const{setSnackbarOpen,setSnackbarMessage} = UseSnackbar();
    const[loading,setLoading] = React.useState(false);

    const id = currentTask.id;

    const handleDelete =async (id) => {
        try {
          setLoading(true);
           const deletedTask = await deleteExistedTask(id);
           setSnackbarMessage(deletedTask.message);
           setSnackbarOpen(true);
           if(route === 'home'){
            await getTasks();
           }
           if(route === 'today-tasks'){
            await getTasks(null,today);
           }
           if(route === 'search-tasks'){
            await getTasks(searchTitle,searchDate);
           }
        } catch (err) {
          setSnackbarMessage(err.response.data.error);
          setSnackbarOpen(true);
        }finally{
          setLoading(false);
        }
    }; 

  return (
    
      <Dialog
        open={deleteOpen}
        onClose={() => {
            deleteHandleClose();
            setCurrentTask('');
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete task"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this task?
          </DialogContentText>
        </DialogContent>
        {loading?<Loading/>:''}
        <DialogActions>
          <Button onClick={()=>{
            deleteHandleClose();
            setCurrentTask('');
          }} className='!text-green-700'>Cancel</Button>
          <Button onClick={async() => {
            await handleDelete(id);
            deleteHandleClose();
            setCurrentTask('');
          }} className='!text-red-700' autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
  );
}