import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import { UseEditDialog } from '../../context/EditDialogContext';
import { UseTask } from '../../context/TaskContext';

export default function Task({task,dropDown}){
const{setCurrentTask,tasks,setTasks}=UseTask();
const{handleOpen}=UseEditDialog();
const{title,description,dueDate,status}=task;

const handleDelete = () => {
    const clonedTasks = [...tasks];
    const deletedTasks = clonedTasks.filter((item)=>item.id !== task.id);
    setTasks(deletedTasks);
} 
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
        <Typography>{dueDate}</Typography>
        <Box className='flex justify-between items-center'>
        <Chip label={status} color="success" className='w-25 !rounded-md'/>
        
        <DeleteIcon onClick={handleDelete} />
        </Box>
        </Box>
    </Box>
    </Tooltip>
    
    </div>
)
};