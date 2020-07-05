/* eslint-disable react/no-array-index-key */
import React from 'react';
import Slideshow from './Slideshow';
import './homeVisitor.scss';

const HomeVisitor = () => {
  // console.log('Home');

  return (
    <div className="home-visitor">
      {/* Slideshow Images/Text */}
      <Slideshow />
      <div id="features-split">
        Fonctionnalité 1
      </div>

    </div>
  );
};

export default HomeVisitor;
