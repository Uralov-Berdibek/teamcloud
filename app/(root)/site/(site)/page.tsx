import React from 'react';

type Props = {};

const Site = ({ params }: { params: { sitename: string } }) => {
  return <div>{params.sitename}</div>;
};

export default Site;
