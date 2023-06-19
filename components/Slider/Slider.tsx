import Image from "next/image";
import sliderImg from "../../public/slider.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from "./Slider.module.css";

export default function Slider(): JSX.Element {
  return (
    <section>
      <Carousel>
        <div className={styles.wrapper}>
          <Image src={sliderImg} alt={""} fill />
        </div>
        <div>
          <Image src={sliderImg} alt={""} />
        </div>
        <div>
          <Image src={sliderImg} alt={""} />
        </div>
      </Carousel>
    </section>
  );
}
