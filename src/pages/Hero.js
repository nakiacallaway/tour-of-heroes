import {useEffect, useState} from 'react';
import {heroData} from '../data/heroes';
import {useParams} from 'react-router-dom';
import {FaStar, FaRegStar} from 'react-icons/fa';

const HeroPage = () => {
  let {heroId} = useParams();
  const [hero, setHero] = useState({
    superhero: '',
    publisher: '',
    alter_ego: '',
    first_appearance: '',
    characters: [],
    featured: false,
    image_url: '',
  });

  const [alert, setAlert] = useState(false);

  useEffect(() => {
      let foundHero = heroData.find(h => h.id === +heroId);
      setHero(foundHero);
  }, [hero]);

  const updateFeatured = (supeId) => {
    let foundHero = heroData.find(s => s.id === +supeId);
    foundHero.featured = !foundHero.featured;
    showAlert();
  }

  const showAlert = () => {
  setAlert(true);
  setTimeout(() => {
    setAlert(false);
  }, 2000)
}
    return (
      <div id='hero' className='text-center'>
        <div className='row mt-4'> 
          <div className='col'>
          <div className='card'>
          <div className='row no-gutters'> 
          <div className='col-md-5 th-img-containter'  >
          <div className='th-hero-img' style={{ backgroundImage: `url(${hero.image_url})` }}>
          </div>
            </div>
          <div className='col-md-7 text-center th-card-body'>
            <div className='th-card-header d-flex justify-content-between'> 
            <span>
              <a href='javascript:void(0)' onClick={() => updateFeatured(hero.id)}>
              {hero.featured ? <FaStar /> : <FaRegStar />}
              </a>
            </span>
            <span>{hero.publisher}</span>
            </div>
            <div className='th-card-name my-3'> 
            <h3>
              <span>
                {hero.alter_ego}, 
              </span>
              <em> aka {hero.superhero}</em>
            </h3>
            </div>
            
            <div className='th-card-details'> 
            
            <div className='details'>
            <h4 className='text-secondary'>Alter-egos:</h4>
            <p>{hero.characters?.map((ch, i) => {
              return (
              <span key={i}>
                {ch}
                {i === hero.characters.length - 1 ? '' : ', ' }
                </span>
              );
              })}</p>

            </div>
            <div className='details'>
            <h2 className='text-secondary'>About</h2>
            <p className='hero-about'>{hero.about}</p>
            </div>

            <div className='detail'>
            <h2 className='text-secondary'>First Appearance</h2>
            <p>{hero.first_appearance}</p>

            </div>
            </div>
                    
          </div>
        </div>
        </div>
         </div>
        </div>
        
        
        </div>
        
        
        
  );
};

export default HeroPage;