export const ImgTxt = ({ order, imgMobile, imgDesktop, title, text }) => {
  return (
    <section className={`relative ${order}`}>
      <picture>
        <source media="(max-width:639px)" srcSet={imgMobile} />
        <source media="(min-width:640px)" srcSet={imgDesktop} />
        <img src={imgMobile} alt="default-image" />
      </picture>
      <div className="absolute bottom-[110px] text-center px-1 h-[140px] flex flex-col justify-between tablet:bottom-[10px] tablet:h-[120px] lg:bottom-[60px] lg:px-[100px] desktop:px-[120px] desktop:h-[180px]" >
        <h3 className="font-Fraunces text-[1.5rem] desktop:text-5xl ">{title}</h3>
        <p className="font-Fraunces text-base sm:px-32 tablet:px-2 tablet:text-[14px] desktop:text-xl">{text}</p>
      </div>
    </section>
  );
};
