import React from 'react';
import AllSites from '../../../../../components/shared/all-sites';
import RecentSites from '../../../../../components/shared/recent-sites';

const sitesData = [
  {
    id: 1,
    name: 'portfolio.cloud.app',
    date: 'Sep 25, 2022, 13:25 PM',
    owner: 'John Deo',
    fileSize: '3.9 MB',
    avatarUrl: 'https://github.com/shadcn.png',
  },
  {
    id: 2,
    name: 'blog.cloud.app',
    date: 'Oct 02, 2022, 10:00 AM',
    owner: 'Jane Smith',
    fileSize: '2.4 MB',
    avatarUrl:
      'https://avatars.mds.yandex.net/i?id=804f004ca7a2bae60934bc84f8f4329482abd602-5668605-images-thumbs&n=13',
  },
  {
    id: 3,
    name: 'google.cloud.app',
    date: 'Oct 02, 2024, 12:00 AM',
    owner: 'Anvar Kim',
    fileSize: '2.8 MB',
    avatarUrl:
      'https://avatars.mds.yandex.net/i?id=a3f6034be87b6f1cf03d522ae4c2b8f122524de4-13214101-images-thumbs&n=13',
  },
  {
    id: 4,
    name: 'twitter.cloud.app',
    date: 'Oct 30, 2024, 10:00 AM',
    owner: 'Ana de Armas',
    fileSize: '23.9 MB',
    avatarUrl:
      'https://avatars.mds.yandex.net/i?id=423ebd40b07d5b760b0443ab189cfb2924d706a4-4782559-images-thumbs&n=13',
  },
  {
    id: 5,
    name: 'team.cloud.app',
    date: 'Oct 12, 2023, 10:00 AM',
    owner: 'Jane Evens',
    fileSize: '1.9 MB',
    avatarUrl:
      'https://avatars.mds.yandex.net/i?id=1003c9d36dd272e1a0e861d487469ba7bd83768f-4227431-images-thumbs&n=13',
  },
  // Add more site data objects here as needed
];

const Home = ({ params }: { params: { username: string } }) => {
  return (
    <div>
      <AllSites sites={sitesData} />
      <RecentSites sites={sitesData} />
    </div>
  );
};

export default Home;
