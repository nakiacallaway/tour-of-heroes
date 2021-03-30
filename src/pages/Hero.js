import {useEffect} from 'react';
import {useState} from 'react';
import {heroData} from '../data/heroes';
import {useParams} from 'react-router-dom';


const HeroPage = () => {
  let {heroId} = useParams();
  const [hero, setHero] = useState({});
  useEffect(() => {
      let foundHero = heroData.find(h => h.id === +heroId);
      setHero(foundHero);
  }, []);
    return (
      <div id='hero' className='text-center'>
        <h2>About {hero.superhero}</h2>
        <p>{hero.superhero} originally appeared in {hero.first_appearance}, published by {hero.publisher}.</p>
        <p>{hero.superhero} is really {hero.alter_ego}.</p>
        <div>
            <img src={hero.image_url} alt='super hero' width="40%"/>
        </div>    
            
      </div>
    );
};

export default HeroPage;