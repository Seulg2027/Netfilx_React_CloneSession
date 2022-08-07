import './App.css';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Row from './components/Row'; 
import requests from './api/requests';
import Footer from './components/Footer'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}>
      <SwiperSlide>
      <Row 
        title="NETFLIX ORIGINALS"
        id="NO"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      </SwiperSlide>
      </Swiper>

      <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}>
      <SwiperSlide>
      <Row
        title="Trending Now"
        id = "TN"
        fetchUrl={requests.fetchTrending}
      />
      </SwiperSlide>
      </Swiper>

      <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}>
      <SwiperSlide>
      <Row
        title="Top Rated"
        id = "TR"
        fetchUrl={requests.fetchTopRated}
      />
      </SwiperSlide>
      </Swiper>

      <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}>
      <SwiperSlide>
      <Row
        title="Action Movies"
        id = "AM"
        fetchUrl={requests.fetchActionMovies}
      />
      </SwiperSlide>
      </Swiper>

      <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}>
      <SwiperSlide>
      <Row
        title="Comedy Movies"
        id = "CM"
        fetchUrl={requests.fetchComedyMovies}
      />
      </SwiperSlide>
      </Swiper>

      <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}>
      <SwiperSlide>
      <Row
        title="Horror Movies"
        id = "HM"
        fetchUrl={requests.fetchHorroryMovies}
      />
      </SwiperSlide>
      </Swiper>

      <Swiper
      spaceBetween={50} 
      slidesPerView={1} 
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}>
      <SwiperSlide>
      <Row
        title="Romance Movies"
        id = "RM"
        fetchUrl={requests.fetchRomanceMovies}
      />
      </SwiperSlide>
      </Swiper>
      <Footer />
    </div>
  );
}

export default App;
