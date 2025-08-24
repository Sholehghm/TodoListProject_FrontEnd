import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import { UseEditDialog } from '../../context/EditDialogContext';
import { UseTask } from '../../context/TaskContext';
import { UseDeleteDialog } from '../../context/DeleteDialogContext';
import { useEffect } from 'react';

export default function Task({task,route,dropDown}){
const{setCurrentTask}=UseTask();
const{handleOpen}=UseEditDialog();
const{title,description,dueDate,status} = task;
const{deleteHandleOpen,setRoute} = UseDeleteDialog();

useEffect(() => {
    setRoute(route);
  }, [route, setRoute]);

return(
    <div className={dropDown===true?'flex justify-center':'hidden'}>
    <Tooltip title={task?.description}>
    <Box className='bg-white m-2 w-[250px] h-[250px] rounded-md shadow-md flex flex-col justify-between p-2'>
        <Box className='flex justify-between items-center'>
        <Typography className='!font-bold p-2'>{title}</Typography>
        <EditNoteIcon onClick={()=>{
            handleOpen();
            setCurrentTask(task);
        }}/>
        </Box>
        <Typography >{description.length>40? description.slice(0,40)+'...':description}</Typography>
        <Box className='flex flex-col gap-3'>
        <Typography>{dueDate.replace(/-/g,'/')}</Typography>
        <Box className='flex justify-between items-center'>
        <Chip label={status} color="success" className='w-25 !rounded-md'/>
        
        <DeleteIcon onClick={() =>{
            console.log('asdfsdf');
            deleteHandleOpen();
            setCurrentTask(task);
            }} />
        </Box>
        </Box>
    </Box>
    </Tooltip>
    
    </div>
)
};