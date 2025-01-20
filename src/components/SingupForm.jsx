import { useState } from "react";
import iconList from "../assets/images/icon-list.svg";
import illustrationDesktop from "../assets/images/illustration-sign-up-desktop.svg";
import illustrationMobile from "../assets/images/illustration-sign-up-mobile.svg";
import { useNavigate } from "react-router-dom";

const SingupForm = () => {
  const [inputText, setInputText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleClick = (e) => {
    if (inputText === "" || null) {
      setErrorMessage("email is required");
    } else if (!inputText || !emailRegex.test(inputText)) {
      setErrorMessage("please provide a valid email");
    } else {
      setErrorMessage("");
      navigate("/success");
    }
    e.preventDefault();
  };

  return (
    <section className="md:grid place-content-center  md:h-screen md:bg-neural-Charcoal-Grey;">
      <article className="flex flex-col md:flex-row-reverse md:p-4 md:gap-4 max-w-[850px] bg-neural-White rounded-3xl">
        <picture>
          <source media="(min-width: 768px)" srcSet={illustrationDesktop} />
          <source media="(max-width: 768px)" srcSet={illustrationMobile} />

          <img className="min-w-full" src="srcSet" alt="illustration image" />
        </picture>
        <div className="p-8  text-sm  text-neural-Charcoal-Grey;">
          <div className="">
            <h1 className="text-3xl md:text-4xl font-bold">Stay updated!</h1>
            <p className="mt-6">
              Join 60,000+ product managers receiving monthly updates on:
            </p>

            <div className="flex gap-4 my-4 items-start">
              <img src={iconList} alt="success icon" />
              <p>Product discovery and building what matters</p>
            </div>
            <div className="flex gap-4 my-4 items-start">
              <img src={iconList} alt="success icon" />
              <p>Measuring to ensure updates are a success</p>
            </div>
            <div className="flex gap-4 my-4 items-start">
              <img src={iconList} alt="success icon" />
              <p> And much more!</p>
            </div>
          </div>

          <form className="mt-6" onSubmit={handleClick}>
            <div className="flex justify-between text-xs">
              <label className="my-2 font-bold" htmlFor="email">
                Email address
              </label>
              <p className="my-2 text-primary-Tomato font-bold">
                {errorMessage}
              </p>
            </div>

            <input
              type="eamil"
              id="email"
              name="eamil"
              value={inputText}
              placeholder="email@company.com"
              className={`w-full px-4 py-3 border border-solid outline-none border-neural-Grey rounded-lg focus:border focus:border-solid  ${
                errorMessage !== "" && "border-primary-Tomato"
              }`}
              onChange={handleChange}
            />

            <button
              className="mt-8 px-4 py-3 bg-neural-Dark-Slate-Grey text-neural-White my-4 w-full rounded-lg text-sm font-bold hover:bg-primary-Tomato hover:shadow-2xl hover:shadow-primary-Tomato"
              type="submit"
            >
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>
      </article>
    </section>
  );
};

export default SingupForm;
