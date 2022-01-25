import React, { memo } from 'react';

export const ShowIncrement = memo(({increment}) => {
    console.log('me volvi a generar ')
  return (
      <button
        className='btn btn-secondary btn-sm'
        onClick={() => {
            increment(10);
        }}
      >
          Incrementar
      </button>
  );
});
