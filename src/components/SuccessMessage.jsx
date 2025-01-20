import { Link } from "react-router-dom";
import successIcon from "../assets/images/icon-success.svg";

const SuccessMessage = () => {
  return (
    <section className="md:grid place-content-center  h-screen md:bg-neural-Charcoal-Grey;">
      <article className=" mt-32 md:mt-0  text-neural-Charcoal-Grey; bg-neural-White rounded-3xl max-w-[375px]">
        <div className="p-6 md:mx-6 md:mt-2 md:mb-0">
          <div>
            <img src={successIcon} alt="success icon" width={50} />
            <h1 className="text-3xl font-bold mt-8 md:mt-6">
              {" "}
              Thanks for subscribing!
            </h1>
          </div>

          <p className="text-md md:text-sm mt-6 md:mt-4">
            A confirmation email has been sent to
            <span className="font-bold ">ash@loremcompany.com</span>. Please
            open it and click the button inside to confirm your subscription.
          </p>
        </div>
        <div className="p-6 mt-20 md:mx-6 md:mt-0 md:pt-0">
         
          <Link to="/">
            <button className="  px-4 py-3 bg-neural-Dark-Slate-Grey text-neural-White my-4 w-full rounded-lg text-md md:text-sm font-bold hover:bg-primary-Tomato hover:shadow-2xl hover:shadow-primary-Tomato">
              Dismiss message
            </button>
          </Link>
        </div>
      </article>
    </section>
  );
};

export default SuccessMessage;
