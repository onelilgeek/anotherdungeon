import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import ClassChangePage from './View/Page/ClassChangePage';
import DungeonPage from './View/Page/DungeonPage';
import LandingPage from './View/Page/LandingPage';
import PersonalityPage from './View/Page/PersonalityPage';
import Header from './View/Component/Header/Header';
import Swal from 'sweetalert2';

function App() {

  const announceViewed = Boolean(window.localStorage.getItem("a_v_d_2"))

  useEffect(() => {
    if(!announceViewed) {
      window.localStorage.removeItem("a_v_d")
      Swal.fire({
        title: 'Update',
        html: '2022-03-19<br><br>Up to JAPANESE Ver.2.12.50',
        icon: 'success',
      }).then(() => {
        window.localStorage.setItem("a_v_d_2", "true")
      })
    }
  }, [announceViewed])

  return (
    <Router basename="/anotherdungeon">
        <Header />
        <Route exact path="/" component={LandingPage}/>
        <Route exact path="/dungeon" component={() => <Redirect to="/dungeon/ancient_miglania_swamp"/>}/>
        <Route exact path="/dungeon/:name" component={DungeonPage}/>
        <Route exact path="/class" component={ClassChangePage}/>
        <Route exact path="/personality" component={PersonalityPage}/>
        <footer style={{margin: "1rem auto", marginTop: '50px', textAlign: 'center',
                minWidth: '250px', maxWidth: '400px'}}>
            &copy; 2021. Made By <a href="https://github.com/HU-Lee" target="_blank" rel="noreferrer">HU-Lee</a>
        </footer>
    </Router>  
  );
}

export default App;
