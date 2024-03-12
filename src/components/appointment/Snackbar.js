import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';

export default function AutohideSnackbar(props) {
  

  const handleClick = () => {
    props.setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    props.setOpen(false);
  };

  return (
    <div>
      <Button type='submit' variant='contained'>BOOK($25)</Button>
      <Snackbar
        open={props.open}
        autoHideDuration={5000}
        onClose={handleClose}
        message={props.reason}
      />
    </div>
  );
}
