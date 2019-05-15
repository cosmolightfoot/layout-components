import React from 'react';

export default function Header() {
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '1em',
    height: '300px'

  };

  
  return (
    <header style={headerStyle}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrLaeQDmivdzIp8i5srhwyb6ZOW1FxSRY7KvXaUDxEmb13xC92cw" />
      <h1>Hello World</h1>
    </header>
  );
}
