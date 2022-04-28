import React from "react";
import styles from './MorePokemon.module.scss'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Header from "../../componets/Header/Header";
import MorePok from "../../componets/MorePok/MorePok"


function MorePokemon() {

    const [allPokemons, setAllPokemons] = useState([])
    const [loadPoke, setLoadPoke] = useState("https://pokeapi.co/api/v2/pokemon?limit=16")
    const getAllPokemons = async () => {
        const res = await fetch(loadPoke)
        const data = await res.json()
        setLoadPoke(data.next)

        function createPokemonObject(result) {
            result.forEach(async (pokemon) => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
                const data = await res.json();
                setAllPokemons((currentList) => [...currentList, data])
            })
        }
        createPokemonObject(data.results)
        await console.log(allPokemons)
    }
    useEffect(() => {
        getAllPokemons()
    }, [])


    return (
        <div>
            <Header />

            <div className={styles.container}>
                <Link to='/'><button className={styles.back}>Back</button></Link>
                <h1>Pokemons</h1>

                <div className={styles.pokemon_container}>
                    <div className={styles.all_container}>
                        {
                            allPokemons.map((pokemon, index) => (
                                <MorePok key={index}
                                    name={pokemon.name}
                                    image={pokemon.sprites.other.dream_world.front_default}
                                    height={pokemon.height}
                                    weight={pokemon.weight}
                                    stat1={pokemon.stats[0].stat.name}
                                    stat2={pokemon.stats[1].stat.name}
                                    stat3={pokemon.stats[2].stat.name}
                                    stat4={pokemon.stats[3].stat.name}
                                    stat5={pokemon.stats[4].stat.name}
                                    stat6={pokemon.stats[5].stat.name}
                                    bs1={pokemon.stats[0].base_stat}
                                    bs2={pokemon.stats[1].base_stat}
                                    bs3={pokemon.stats[2].base_stat}
                                    bs4={pokemon.stats[3].base_stat}
                                    bs5={pokemon.stats[4].base_stat}
                                    bs6={pokemon.stats[5].base_stat}
                                />
                            ))
                        }
                    </div>
                    <button className={styles.load_more} onClick={() => getAllPokemons()}>
                        More Pokemons
                    </button>
                </div>
            </div>
        </div>
    )
}

export default MorePokemon;
