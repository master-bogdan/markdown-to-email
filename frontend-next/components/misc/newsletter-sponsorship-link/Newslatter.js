import React from 'react';
import styles from './styles';

const config = {
  contact: 'https://sponsor.hackernoon.com/contact',
};

const NewsletterSponsorshipLink = () => {
  return (
    <div style={styles.center}>
      <br />
      <a href={config.contact} dataTestid="newslatterHrefTest" target="_blank" style={styles.news}>
        Click Here To Sponsor A Newsletter by Hacker Noon
      </a>
    </div>
  );
}

export default NewsletterSponsorshipLink;