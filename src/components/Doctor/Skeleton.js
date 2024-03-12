import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';

export default function Animations() {
  return (
  <div style={{display: 'grid', gridTemplateColumns: 'auto auto', gap: '1rem'}}>
  <Skeleton
  sx={{ bgcolor: 'grey.900' }}
  variant="rectangular"
  width={210}
  height={118}
/>
  <Skeleton
  sx={{ bgcolor: 'grey.900' }}
  variant="rectangular"
  width={210}
  height={118}
/>
  <Skeleton
  sx={{ bgcolor: 'grey.900' }}
  variant="rectangular"
  width={210}
  height={118}
/>
  </div>
  );
}