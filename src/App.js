import { useState } from 'react';
import './App.css';
import ListMovies from './Comp/ListMovies';
import NavbarMovie from './Comp/Navbar';
import AddMovie from './Comp/AddMovie';


function App() {
  const [movies,setMovies] = useState(
    [
      {
          title : "The Last of Us",
          description : "In 2013, an outbreak of a mutant Cordyceps fungus ravages the United States, transforming its human hosts into aggressive creatures. In the suburbs of Austin, Texas, Joel (Troy Baker) flees the chaos with his brother, Tommy (Jeffrey Pierce), and daughter, Sarah (Hana Hayes).",
          posterURL : "https://upload.wikimedia.org/wikipedia/en/4/46/Video_Game_Cover_-_The_Last_of_Us.jpg",
          rating : 5
      },
  
      {
          title : "Fast & Furious",
          description : "Fast & Furious (also known as The Fast and the Furious) is an American media franchise centered on a series of action films that are largely concerned with street racing, heists, spies, and family. The franchise also includes short films, a television series, toys, video games, live shows, and theme park attractions.",
          posterURL : "https://fr.web.img5.acsta.net/pictures/23/05/10/10/55/5129031.jpg",
          rating : 5
      },
  
      {
          title : "Unstoppable",
          description : "Unstoppable is a 2010 American disaster action thriller film directed and produced by Tony Scott, written by Mark Bomback, and starring Denzel Washington and Chris Pine. It is based on the real-life CSX 8888 incident, telling the story of a runaway freight train and the two men who attempt to stop it.",
          posterURL : "https://images.moviesanywhere.com/5795f26081df5750d76dcb2f9c269095/24b6851e-47eb-4167-bd2e-27d372e4a443.jpg", 
          rating : 4
      }
  ]
  )
  return (
    <div className="App">
      <NavbarMovie/>
      <AddMovie movies={movies} setMovies={setMovies}/>
     <ListMovies movies={movies}/>
     

     
      
    </div>
  );
}

export default App;
