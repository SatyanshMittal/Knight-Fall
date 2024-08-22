import React from 'react';
import styles from '../styles/ScrollingCards.module.css';

const characters = [
  { id: 1, name: 'Character 1', image: '/images/character1.png' },
  { id: 2, name: 'Character 2', image: '/images/character2.png' },
  { id: 3, name: 'Character 3', image: '/images/character3.png' },
  { id: 4, name: 'Character 4', image: '/images/character4.png' },
];

const maps = [
  { id: 1, name: 'Map 1', image: '/images/map1.png' },
  { id: 2, name: 'Map 2', image: '/images/map2.png' },
  { id: 3, name: 'Map 3', image: '/images/map3.png' },
  { id: 4, name: 'Map 4', image: '/images/map4.png' },
];

const ScrollingCards: React.FC = () => {
  return (
    <section className={styles.scrollingCards}>
      <div className={styles.characters}>
        {characters.map(character => (
          <div key={character.id} className={styles.card}>
            <img src={character.image} alt={character.name} className={styles.cardImage} />
            <h3 className={styles.cardName}>{character.name}</h3>
          </div>
        ))}
      </div>
      <div className={styles.maps}>
        {maps.map(map => (
          <div key={map.id} className={styles.card}>
            <img src={map.image} alt={map.name} className={styles.cardImage} />
            <h3 className={styles.cardName}>{map.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ScrollingCards;
