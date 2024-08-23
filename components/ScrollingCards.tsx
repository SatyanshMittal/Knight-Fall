import React from 'react';
import styles from '../styles/ScrollingCards.module.css';
import Marquee from 'react-fast-marquee';

const characters = [
  { id: 1, name: 'Character 1', video: '/map1.mp4' },
  { id: 2, name: 'Character 2', video: '/map2.mp4' },
  { id: 3, name: 'Character 3', video: '/map3.mp4' },
  { id: 4, name: 'Character 4', video: '/map4.mp4' },
];

const maps = [
  { id: 1, name: 'Map 1', video: '/map1.mp4' },
  { id: 2, name: 'Map 2', video: '/map2.mp4' },
  { id: 3, name: 'Map 3', video: '/map3.mp4' },
  { id: 4, name: 'Map 4', video: '/map4.mp4' },
];

// const ScrollingCards: React.FC = () => {
//   return (
//     <div className={styles.scrollingCards}>
//       <div className={styles.characters}>
//         {characters.map((character) => (
//           <div key={character.id} className={styles.card}>
//             <video
//               src={character.video}
//               autoPlay
//               loop
//               muted
//               className={styles.mapVideo}
//             />
//             <p>{character.name}</p>
//           </div>
//         ))}
//       </div>
//       <div className={styles.maps}>
//         {maps.map((map) => (
//           <div key={map.id} className={styles.card}>
//             <video
//               src={map.video}
//               autoPlay
//               loop
//               muted
//               className={styles.mapVideo}
//             />
//             <p>{map.name}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ScrollingCards;



export default function ScrollingCards() {
  return (
    <div >
    <Marquee speed={200}>
      <div className={styles.characters}>
        {characters.map((character) => (
          <div key={character.id} className={styles.card}>
            <video
              src={character.video}
              autoPlay
              loop
              muted
              className={styles.mapVideo}
            />
            <p>{character.name}</p>
          </div>
        ))}
      </div>
    </Marquee>

    <Marquee direction='right' speed={150}>
    <div className={styles.maps}>
        {maps.map((map) => (
          <div key={map.id} className={styles.card}>
            <video
              src={map.video}
              autoPlay
              loop
              muted
              className={styles.mapVideo}
            />
            <p>{map.name}</p>
          </div>
        ))}
      </div>
      </Marquee>
    </div>
  )
}

