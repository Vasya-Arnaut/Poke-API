import styles from './App.module.scss';
import Home from './Pages/Home/Home';
import MorePokemon from './Pages/MorePokemon/MorePokemon';
import {Routes, Route} from 'react-router-dom'

function App() {

  return (
    <div className={styles.App}>
      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='MorePokemon' element= {<MorePokemon/>}/>
      </Routes>
    </div>
  )
}

export default App;
