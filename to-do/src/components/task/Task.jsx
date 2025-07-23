import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import EditNoteIcon from '@mui/icons-material/EditNote';
export default function Task({task}){
const{title,description,date,status}=task;
return(
    <>
    <Tooltip title={task?.description}>
    <Box className='bg-white m-2 w-[200px] h-[200px] rounded-md shadow-md flex flex-col justify-between p-2'>
        <Typography className='!font-bold p-2'>{title}</Typography>
        <Typography >{description.length>40? description.slice(0,40)+'...':description}</Typography>
        <Box className='flex flex-col gap-3'>
        <Typography>{date}</Typography>
        <Box className='flex justify-between items-center'>
        <Chip label={status} color="success" className='w-25 !rounded-md'/>
        <EditNoteIcon />
        </Box>
        </Box>
    </Box>
    </Tooltip>
    
    </>
)
};