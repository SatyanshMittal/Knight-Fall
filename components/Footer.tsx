import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p style={styles.text}>
        &copy; 2024 Knight Fall. All rights reserved.
      </p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#222',
    color: '#fff',
    textAlign: 'center' as const,
    padding: '1rem',
    left: 0,
    bottom: 0,
    width: '100%',
  },
  text: {
    margin: 0,
  },
};

export default Footer;