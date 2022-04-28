import styles from './Home.module.scss';
import Header from '../../componets/Header/Header';
import Pok from '../../componets/Pok/Pok';
import Modal from '../../componets/Modal/Modal';
import Desc from '../../componets/Desc/Desc';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const [pokemon, setPokemon] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [modalActive, setModalActive] = useState(false)



  // let clickHandler = (async (text, event) => {
  //   const PokPromise = []

  //   if (event.code === 'Enter') {
  //     let pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${text.toLowerCase()}`)
  //     pokemon = await pokemon.json()
  //     PokPromise.push(pokemon)
  //   } else {
  //     console.log(1)
  //   }

  //   await setPokemon(PokPromise)

  // })

  let getPok = (async (text) => {
    const PokPromise = []

    let pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${text.toLowerCase()}`)
    pokemon = await pokemon.json()
    PokPromise.push(pokemon)

    await setPokemon(PokPromise)

  })

  return (
    <div className={styles.Home}>
      <Header />

      <div className={styles.Search}>
        <input type="text" to className={styles.input} placeholder="Find pokemon" value={inputValue.toLowerCase()} onChange={event => setInputValue(event.target.value)} />

        <button type="button" disabled={inputValue.length === 0} className={styles.button} onClick={() => getPok(inputValue)} >search</button>
      </div>


      {
        pokemon.map((elem, index) => {
          return (
            <div onClick={() => setModalActive(true)} key={index}>
              <Pok url={elem.sprites.other.dream_world.front_default}
                name={elem.name}
              />
            </div>
          )
        })
      }

      <Modal active={modalActive} setActive={setModalActive}>
        <Header />
        <div>
          {
            pokemon.map((elem, index) => {
              return (

                <Desc key={index}
                  url={elem.sprites.other.dream_world.front_default}
                  name={elem.name}

                  stat1={elem.stats[0].stat.name}
                  bs1={elem.stats[0].base_stat}
                  stat2={elem.stats[1].stat.name}
                  bs2={elem.stats[1].base_stat}
                  stat3={elem.stats[2].stat.name}
                  bs3={elem.stats[2].base_stat}
                  stat4={elem.stats[3].stat.name}
                  bs4={elem.stats[3].base_stat}
                  stat5={elem.stats[4].stat.name}
                  bs5={elem.stats[4].base_stat}
                  stat6={elem.stats[5].stat.name}
                  bs6={elem.stats[5].base_stat}
                />
              )
            })
          }
        </div>
      </Modal>

      <Link to='/MorePokemon' >
        <button className={styles.more}>more</button>
      </Link>

    </div>
  );
}

export default Home;
