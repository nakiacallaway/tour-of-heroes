import { useEffect, useState } from 'react';
import { heroData } from '../data/heroes';
import HeroCard from '../components/HeroCard';
import '../App.css'

const Dashboard = () => {
  const [heroes, setHeroes] = useState(heroData);
  const [alert, setAlert] = useState(false);
    useEffect(() => {
      let featured = heroData.filter(hero => hero.featured);
      setHeroes(featured);
    }, [alert]);

  const updateFeatured = (heroId) => {
    let foundHero = heroData.find(hero => hero.id === +heroId);
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
        <div id="Dashboard">
            <div className="row text-center mt-3">
                <div className="col">
                    <h2>Welcome to the tour of Heroes!</h2>
                    <h4 className="text-secondary">Featured Heroes</h4>
                </div>
            </div>

            <div className="row">
                {heroes.map((hero, index) => {
                    return (
                      <div className="col" key={hero.id}>
                       <HeroCard hero={hero} updateFeatured={updateFeatured}/>
                      </div>
                    );
                })}
            </div>

        </div>
    );
};

export default Dashboard;