import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Anime from './components/Anime';

const TOP_ANIMES_API = '/top/anime';
const SERACH_API = '/search/anime?q=';

function App() {
    const [animes, setAnimes] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
        axios.get(TOP_ANIMES_API).then((response) => {
            setAnimes(response.data.top);
        });
    }, []);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (setSearchTerm) {
            axios.get(SERACH_API + searchTerm).then((response) => {
                setAnimes(response.data.results);
                console.log(response.data.results);
            });
            setSearchTerm('');
        }
    };
    const handleOnChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <>
            <header>
                <form onSubmit={handleOnSubmit}>
                    <input
                        className="search"
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={handleOnChange}
                    />
                </form>
            </header>
            <div className="anime-container">
                {animes.map((anime) => (
                    <Anime key={anime.mal_id} {...anime} />
                ))}
            </div>
        </>
    );
}

export default App;
