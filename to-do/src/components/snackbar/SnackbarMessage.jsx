import React from "react";
import { Snackbar } from "@mui/material";
import { UseSnackbar } from "../../context/SnackbarContext";

export default function SnackbarMessage(){
  const{snackbarOpen,snackbarHandleClose,snackbarMessage} = UseSnackbar();
    return(
        <Snackbar
        anchorOrigin={{ 
            vertical: 'top',
            horizontal: 'center', }}
        open={snackbarOpen}
        autoHideDuration={5000}
        onClose={snackbarHandleClose}
        message={snackbarMessage}
        slotProps={{
            content: {
              sx: {
                backgroundColor: 'white',
                color: 'black',
                boxShadow: 3,
                borderRadius: '8px',
                padding: '8px 16px',
              },
            },
          }}
        
      />
    )
};