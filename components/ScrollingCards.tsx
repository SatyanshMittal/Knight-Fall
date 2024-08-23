
import React from 'react';
import styles from '../styles/ScrollingCards.module.css';


const maps = [
  { id: 1, name: 'Map 1', video: '/map4.mp4' },
  { id: 2, name: 'Map 2', video: '/map2.mp4' },
  { id: 3, name: 'Map 3', video: '/map3.mp4' },
  { id: 4, name: 'Map 4', video: '/map4.mp4' },
  { id: 5, name: 'Map 5', video: '/map1.mp4' },
];

const ScrollingCards: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.maps}>
        {maps.map(map => (
          <div key={map.id} className={styles.card}>
            <video
              src={map.video}
              autoPlay
              loop
              muted
              className={styles.mapVideo}
            />
            <br></br>
            <p>{map.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollingCards;