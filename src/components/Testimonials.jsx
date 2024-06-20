import { User } from "./User.jsx";

import emily from "../assets/images/image-emily.jpg";
import jennie from "../assets/images/image-jennie.jpg";
import thomas from "../assets/images/image-thomas.jpg";

export const Testimonials = () => {
  return (
    <section className="w-[375px] mx-auto flex flex-col place-content-between
    sm:w-full">
      <h3 className="text-center text-Grayish-blue font-Fraunces text-3xl font-medium py-10">
        Client Testimonials
      </h3>
      <div className="sm:flex sm:w-[640px] sm:mx-auto md:w-full md:px-1 md:text-sm lg:px-3">
        <User
          avatar={emily}
          text="We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit."
          userName="Emily R."
          career="Marketing Director"
        />
        <User
          avatar={thomas}
          text="  Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience."
          userName="Thomas S."
          career=" Chief Operating Officer"
        />
        <User
          avatar={jennie}
          text="  Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
          userName="Jennie F."
          career="Business Owner"
        />
      </div>
    </section>
  );
};
