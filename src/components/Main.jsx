import imgMobile from "../assets/images/mobile/image-header.jpg";
import imgDesktop from "../assets/images/desktop/image-header.jpg";
import flecha from "../assets/images/icon-arrow-down.svg";

export const Main = () => {
  return (
    <section>
      <picture>
        <source srcSet={imgMobile} media="(max-width:639px)" />
        <source srcSet={imgDesktop} media="(min-width:640px)" />
        <img src={imgMobile} alt="mobile-image" />
      </picture>
      <p className="absolute top-[100px] left-0 right-0 w-[327px] mx-auto font-Fraunces text-[40px] uppercase tracking-[6.25px] text-center text-White
      
      sm:w-[600px] sm:top=[120px]
      ">
        We are creative
      </p>
      <img src={flecha} alt="icon-arrow" className="absolute top-[250px] left-0 right-0 mx-auto *:
      sm:top-[150px]
      md:top-[200px]
      lg:top-[250px]
      " />
    </section>
  );
};
