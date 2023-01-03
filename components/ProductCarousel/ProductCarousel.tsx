import style from "./productCarousel.module.css";
import Slider, { Settings } from "react-slick";
import ProductCard from "../ProductCard/ProductCard";
import { useEffect, useRef, useState } from "react";

export default function ProductCarousel() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const [slidesToShow, setSlidesToshow] = useState(1);

  const slider = useRef<Slider>(null);

  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const { innerWidth: width } = window;
    setWindowWidth(width);

    const handleResize = (event: any) => {
      setWindowWidth(event.target.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const newWidth = windowWidth >= 1024 ? (windowWidth > 768 ? 2 : 3) : 1;

    setSlidesToshow(newWidth);
  }, [windowWidth]);

  const settings: Settings = {
    infinite: true,
    speed: 500,
    dots: slidesToShow > 1,
    arrows: slidesToShow > 1,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
    swipeToSlide: true,
    beforeChange: (current, next) => setCurrentSlideIndex(next)
  };

  return (
    <div>
      <Slider className="w-full" ref={slider} {...settings}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Slider>
      <div className="flex items-center justify-center px-4 max-w-xs md:hidden">
        <input
          className={style.range}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            slider.current?.slickGoTo(parseInt(e.target.value))
          }
          value={currentSlideIndex}
          type="range"
          min={0}
          max={3}
        />
      </div>
    </div>
  );
}
