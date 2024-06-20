import { Image } from "./Image.jsx";

import mobileMilkBottles from "../assets/images/mobile/image-gallery-milkbottles.jpg";
import desktopMilkBottles from "../assets/images/desktop/image-gallery-milkbottles.jpg";
import mobileCone from "../assets/images/mobile/image-gallery-cone.jpg";
import desktopCone from "../assets/images/desktop/image-gallery-cone.jpg";
import mobileOrange from "../assets/images/mobile/image-gallery-orange.jpg";
import desktopOrange from "../assets/images/desktop/image-gallery-orange.jpg";
import mobileSugarCubes from "../assets/images/mobile/image-gallery-sugar-cubes.jpg";
import desktopSugarCubes from "../assets/images/desktop/image-gallery-sugarcubes.jpg";

export const GalleryContainer = () => {
  return (
    <div className="grid grid-cols-2 sm:flex">
      <Image imgMobile={mobileMilkBottles} imgDesktop={desktopMilkBottles} />
      <Image imgMobile={mobileOrange} imgDesktop={desktopOrange} />
      <Image imgMobile={mobileCone} imgDesktop={desktopCone} />
      <Image imgMobile={mobileSugarCubes} imgDesktop={desktopSugarCubes} />
    </div>
  );
};
