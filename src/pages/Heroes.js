import { useState, useEffect } from 'react';
import HeroCard from '../components/HeroCard';
import { heroData } from '../data/heroes';
import { Link } from 'react-router-dom';

const HeroesPage = () => {
  const [heroes, setHeroes] = useState([]);
  const [alert, setAlert] = useState(false);

  useEffect( () => {
    setHeroes(heroData);
  }, [alert] );
  
  const updateFeatured = heroId => {
    let foundHero = heroData.find(hero => hero.id === +heroId);
    foundHero.featured = !foundHero.featured;
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 2000);
  };
  
  return (
    <div id="heroes">
      <div className="row text-center mt-3">
        <div className="col">
          <h2>View all available Heroes!</h2>
        </div>
      </div>
      <div className='row'>
      {heroes.map((hero, index) => {
        return (
          <div className='col-3'>
          <HeroCard hero={hero} updateFeatured={updateFeatured} />
          </div>
        );
        })};
      </div>
    </div>
  );
};


export default HeroesPage;