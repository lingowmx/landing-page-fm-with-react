export const Text = ({ order, title, text, color }) => {
  return (
    <div
      className={`text-center h-[437px] flex flex-col place-content-around px-8 py-6 font-Fraunces leading-20
    tablet:h-auto ${order} lg:px-[65px] desktop:text-left desktop:py-[140px] desktop:px-[100px]`}
    >
      <h3
        className="font-Fraunces text-[2rem] font-semibold text-5xl 
      tablet:text-4xl  desktop:text-6xl
      "
      >
        {title}
      </h3>
      <p
        className="text-Dark-grayish-blue text-lg
        tablet:text-base tablet:leading-[1.5rem]
        lg:text-xl desktop:text-xl
      "
      >
        {text}
      </p>
      <div className="relative">
        <button className="text-lg uppercase lg:text-2xl ">Learn more</button>
        <div
          className={`w-[137px] h-[10px] rounded-md absolute top-[16px] -z-10 left-0 right-0 mx-auto ${color} opacity-30 
          lg:top-[22px] desktop:right-[360px] desktop:w-[150px]`}
        ></div>
      </div>
    </div>
  );
};
