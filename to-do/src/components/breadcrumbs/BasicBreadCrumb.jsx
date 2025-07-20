import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BasicBreadcrumb({path}) {
  const style = {
    "&:hover": {
      color: "green",
    },
    color: "black"
  };
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs className='bg-white' separator={<NavigateNextIcon />}>
        <Link href="/" className='text-black !no-underline ' sx={style}>
          todo
        </Link>
        <Typography sx={style}>{path}</Typography>
      </Breadcrumbs>
    </div>
  );
}
