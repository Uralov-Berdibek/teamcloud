import React from 'react';

const Home = ({ params }: { params: { username: string } }) => {
  return <div>{params.username}</div>;
};

export default Home;
