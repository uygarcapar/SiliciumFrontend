import { useEffect, useState } from "react";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "./Slider.css";
import sliderImage1 from "../assets/1.jpg";
import sliderImage2 from "../assets/2.jpg";
import sliderImage3 from "../assets/3.jpg";
import sliderImage4 from "../assets/4.jpg";
import sliderImage5 from "../assets/5.jpg";
import sliderImage6 from "../assets/6.jpg";
import sliderImage7 from "../assets/7.jpg";
import sliderImage8 from "../assets/8.jpg";
import sliderImage8mobile from "../assets/8-mobile.jpg";
import sliderImage9 from "../assets/9.jpg";

const Slider = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Splide
      hasTrack={false}
      options={{
        type: "loop",
        autoplay: true,
        perPage: 1,
        speed: 800,
        drag: false,
        interval: 4000,
        pauseOnHover: true,
      }}
    >
      <SplideTrack>
        <SplideSlide>
          <li className="slider-item splide__slide">
            <div className="slider-image">
              <img
                className="img-fluid img-special"
                src={windowWidth > 768 ? sliderImage8 : sliderImage8mobile}
                alt=""
              />
            </div>
            <div className="container">
              <div className="slider-info">
                <p className="slider-title-2">Neden Almalıyım ?</p>
                <p className="slider-desc">
                  Silika saçlarda canlılık sağlar, saç kökünde bulunan
                  metabolizmayı destekler. Damarları korur, silikanın azalması
                  damar sertliğine sebebiyet verir, bu durum kalp ve damar
                  sistemi sorunları için riskin artmasına neden olur.{" "}
                </p>
                <p className="slider-title">ORGANIC SILICIUM</p>
                <a href="#" className="btn-primary">
                  Şimdi Keşfet
                </a>
              </div>
            </div>
          </li>
        </SplideSlide>

        <SplideSlide>
          <li className="slider-item splide__slide">
            <div className="slider-image">
              <img className="img-fluid" src={sliderImage6} alt="" />
            </div>
            <div className="container">
              <div className="slider-info">
                <p className="slider-title-2">Neden Almalıyım ?</p>
                <p className="slider-desc">
                  Organic Silicium ağır metaller ile bağlanarak ağır metallerin
                  vücuttan atılımında rol alır. Alüminyum, kadmiyum, civa gibi
                  zararlı ağır metallerle bağlanır ve dokudan uzaklaştırmaya ve
                  vücuttan atılmasına yardımcı olur.{" "}
                </p>
                <p className="slider-title">ORGANIC SILICIUM</p>
                <a href="#" className="btn-primary">
                  Şimdi Keşfet
                </a>
              </div>
            </div>
          </li>
        </SplideSlide>

        <SplideSlide>
          <li className="slider-item splide__slide">
            <div className="slider-image">
              <img className="img-fluid" src={sliderImage1} alt="" />
            </div>
            <div className="container">
              <div className="slider-info">
                <p className="slider-title-2">Neden Almalıyım ?</p>
                <p className="slider-desc">
                  Vücudumuzda tüm yapılar bir yapım ve yıkım sorunu
                  içerisindedir. Bu dengenin korunmasında Organik Silika önemli
                  bir rol oynar. Kemik dokudaki kollajen lifleri arasında
                  kalsiyumun yerleşimini düzenlemede rol alır. Bu sayede kemik
                  erimesinden korunmayı sağlar{" "}
                </p>
                <p className="slider-title">ORGANIC SILICIUM</p>
                <a href="#" className="btn-primary">
                  Şimdi Keşfet
                </a>
              </div>
            </div>
          </li>
        </SplideSlide>
      </SplideTrack>
      <div className="splide__arrows">
        <button className="splide__arrow splide__arrow--prev splide__arrow1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 320 512"
          >
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
        </button>
        <button className="splide__arrow splide__arrow--next splide__arrow1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 320 512"
          >
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
        </button>
      </div>
    </Splide>
  );
};

export default Slider;
