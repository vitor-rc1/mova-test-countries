import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import './Loading.css';

function Loading() {
  return (
    <CircularProgress className="loading-component" />
  );
}

export default Loading;
