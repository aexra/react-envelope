import React, { useState, useEffect, useRef } from 'react';
import css from './LargeSlider.module.css';

export const LargeSlider = ({
  autoPlay = false,
  autoPlayInterval = 3000,
  loop = false,
  hideButtons = false,
  hideDots = false,
  transitionDuration = 500,
  children
}) => {
  const [slides, setSlides] = useState(React.Children.toArray(children));
};