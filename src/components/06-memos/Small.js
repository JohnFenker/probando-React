import React, { memo } from 'react';

export const Small = memo(({value}) => {
  console.log('me monte')
  return (<small>{ value }</small>)
});
