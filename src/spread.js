import React from 'react';

const spread = () => {
  let list = [1, 2, 3];

  return (
    <div>
      <div>
        {list.map((n) => (
          <h1>{n + 10}</h1>
        ))}
      </div>
    </div>
  );
};

export default spread;
