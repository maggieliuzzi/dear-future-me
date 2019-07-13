import React from 'react';
import Button from 'antd/es/button';
import { Link } from 'react-router-dom';

const HomePage = (props) => {
  const {
    history
  } = props;
  return (
   <div>
       <h1>This is the homepage</h1>
        <Button type="primary" onClick={() => {history.push('/create-letter')}}>Create a letter!</Button>
   </div>
  );
}

export default HomePage;
