import { useState, useEffect } from 'react';
import HeroCard from '../components/HeroCard';
import { heroData } from '../data/heroes';


const HeroesPage = () => {
  const [heroes, setHeroes] = useState([]);
  const [alert, setAlert] = useState(false);
  const [searchTerm, setSearchTerm] = useState ('');
  
  useEffect( () => {
    const foundHeroes = heroData.filter(hd => {
      return (
      hd.superhero.toLowerCase().includes(searchTerm.toLowerCase()) +
      hd.publisher.toLowerCase().includes(searchTerm.toLowerCase()) +
      hd.alter_ego.toLowerCase().includes(searchTerm.toLowerCase())
      // hd.characters.forEach(c => c.toLowerCase().includes(searchTerm.toLowerCase())) add to search inside data arrary
      );
    } );
    setHeroes(heroData);
    searchTerm === '' ? setHeroes(heroData) : setHeroes(foundHeroes);
  }, [alert, searchTerm] );
  
  const updateFeatured = heroId => {
    let foundHero = heroData.find(hero => hero.id === +heroId);
    foundHero.featured = !foundHero.featured;
    setAlert(true);
    setTimeout(() => {
      setAlert(false);
    }, 4500);
  };

  const handleChange = event => {
  setSearchTerm(event.target.value);
  }
  
  return (
    <div id="heroes">
      <div className="row text-center mt-3">
        <div className="col">
          <h2>View all available Heroes!</h2>
        </div>
      </div>
      <div className='row'>
        <div className="col">
          { alert ? (
          <div className='alert alert-success text-center' role='alert'>
            Operation Complete
          </div> ) : (<div></div>)
          }
          </div>
        </div>
      <div className='row'>
        <div className="col">
          <div className="form-group">
            <input type='text' id='hero-search' className="form-control" placeholder='Find a Hero' value={searchTerm} onChange={handleChange} />
          </div>
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