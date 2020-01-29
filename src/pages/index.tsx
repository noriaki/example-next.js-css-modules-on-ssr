import React from 'react';
import { NextPage } from 'next';

import BlueText from '../components/BlueText';

interface Props {
  userAgent?: string
};

const IndexPage: NextPage<Props> = ({ userAgent }) => (
  <div className="red-text">
    <p>This text should be red.</p>
    <BlueText />
    <p>user-agent: {userAgent}</p>
  </div>
);

IndexPage.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return { userAgent };
};

export default IndexPage;
