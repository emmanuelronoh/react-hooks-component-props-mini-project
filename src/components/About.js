import React from 'react';
import PropTypes from 'prop-types';

const About = ({ image, about }) => {
  return (
    <aside>
      <img
        src={image || "https://via.placeholder.com/215"}
        alt="blog logo"
        style={{ width: '215px', height: 'auto' }} // Optional: Ensure consistent size
      />
      <p>{about}</p>
    </aside>
  );
};

// Set default props
About.defaultProps = {
  about: 'Default about text'
};

// Set prop types
About.propTypes = {
  image: PropTypes.string,
  about: PropTypes.string,
};

export default About;
