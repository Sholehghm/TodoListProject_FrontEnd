import {Dialog,DialogTitle} from '@mui/material';

export default function EditDialog(){
    return(
        <Dialog onClose={handleClose} open={open}>
        <DialogTitle>Set backup account</DialogTitle>
       
      </Dialog>
    )
}