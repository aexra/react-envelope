import React from 'react';
import styles from './StateToggleButton.module.css';

const StateToggleButton = ({
  states,
  onChange,
  initialIndex = 0,
  className = '',
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(initialIndex);

  const handleClick = () => {
    const nextIndex = (currentIndex + 1) % states.length;
    setCurrentIndex(nextIndex);
    onChange(states[nextIndex]);
  };

  if (states.length === 0) return null;

  return (
    <button 
      className={`${styles.button} ${className}`}
      onClick={handleClick}
      aria-label="Toggle state"
    >
      {states[currentIndex].display}
    </button>
  );
};

export default StateToggleButton;