import React from 'react';
import AllSites from '../../../../components/shared/allsites';
import RecentSites from '../../../../components/shared/recent-sites';

const Home = ({ params }: { params: { username: string } }) => {
  return (
    <div>
      <AllSites />
      <RecentSites />
    </div>
  );
};

export default Home;
