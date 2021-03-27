import React from 'react';

const ANIME_API = '/top/anime';

const setScoreClass = (score) => {
    if (score >= 8) {
        return 'green';
    } else if (score >= 6) {
        return 'orange';
    } else {
        return 'red';
    }
};

const Anime = ({title, image_url, score, episodes, synopsis}) => (
    <div className="anime">
        <img src={image_url} alt={title}></img>
        <div className="anime-info">
            <h3>{title}</h3>
            <span className={`tag ${setScoreClass(score)}`}>{score}</span>
        </div>
        <div className="anime-over">
            {episodes && episodes > 1 && (
                <div className="anime-eps">
                    <h2>Episodes:</h2>
                    <span>{episodes}</span>
                </div>
            )}
            {synopsis && (
                <div className="anime-overview">
                    <h2>Overview:</h2>
                    <span>{synopsis}</span>
                </div>
            )}
        </div>
    </div>
);

export default Anime;
