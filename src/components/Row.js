import axios from '../api/axios';
import React, { useEffect, useRef, useState } from 'react';
import './Row.css';
import MovieModal from './MovieModal/index';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";


function Row({ title, id, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [movieSelected, setMovieSelected] = useState({});

  useEffect(() => {
    fetchMovieData();
  }, [fetchUrl]);

  const fetchMovieData = async () => {
    const request = await axios.get(fetchUrl);
    setMovies(request.data.results);
  };

  const handleClick = (movie) => {
    setModalOpen(true);
    setMovieSelected(movie);
  };

  const BASE_URL = 'https://image.tmdb.org/t/p/original/';
  return (
    <section className="row">
    <h2>{title}</h2>
    <Swiper
          className="slider"
          spaceBetween={10}
          slidesPerView={6}
          slidesPerGroup={6}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          navigation={true} 
          modules={[Navigation]}
          >

        <div id={id} className="row__posters">
        { movies.map( (movie) => (
            <SwiperSlide>
            <img
              key={movie.id}
              className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
              src={`${BASE_URL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              loading="lazy"
              alt={movie.name}
              onClick={() => handleClick(movie)}
            />
            </SwiperSlide>
          ))}
        </div>
      </Swiper>

      {modalOpen && <MovieModal {...movieSelected} setModalOpen={setModalOpen} />}

    </section>
  );
}

export default Row;
