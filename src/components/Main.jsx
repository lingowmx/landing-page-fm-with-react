import imgMobile from '../assets/images/mobile/image-header.jpg';
import imgDesktop from '../assets/images/desktop/image-header.jpg';

export const Main = () => {
  return (
    <main>
        <picture>
            <source srcSet={imgMobile} media="(max-width:640px)"/>
            <source srcSet={imgDesktop} media="(min-width:641px)"/>
            <img src={imgMobile} alt="mobile-image" />
        </picture>
    </main>
  )
}
