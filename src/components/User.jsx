

export const User = ({avatar, text, userName, career}) => {
  return (
    <section className="text-center flex flex-col justify-center font-Fraunces">
        <div className="flex justify-center">
        <img src={avatar} alt="avatar-picture" className="rounded-full w-[52px] h-[52px]" />
        </div>
        <div className="px-8 pt-6 pb-7 text-base">
            {text}
        </div>
        <h4 className="font-semibold">
            {userName}
        </h4>
        <p className="text-Grayish-blue text-sm pt-1.5 pb-12">
            {career}
        </p>
    </section>
  )
}
