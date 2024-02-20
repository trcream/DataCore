import React from 'react';

export const metadata = {
  title: 'About Page',
  description: 'Our company and mission',
};
function AboutLayout ({ children }) {
  return (
    <section>
      AboutLayout
      {children}
    </section>
  );
};

export default AboutLayout;
