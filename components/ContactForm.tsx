import emailjs from "@emailjs/browser";
import { useTranslations } from "next-intl";
import { FormEvent } from "react";

export default function ContactForm() {
  const t = useTranslations("contactForm");
  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7jyespo",
        "template_mrmdy0t",
        e.currentTarget,
        "AOlcQlyZTbCB3SpNY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.currentTarget.reset();
  };
  return (
    <div className="" id="contact-form">
      <div className="w-9/12 mx-auto">
        <h1 className="text-gray800 text-4xl font-bold py-4">{t("header")}</h1>
      </div>
      <form className="w-9/12 mx-auto mb-8" onSubmit={sendEmail}>
        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="email"
              name="reply_to"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray800 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              E-mail
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="tel"
              name="floating_phone"
              id="floating_phone"
              className="block py-2.5 px-0 w-full text-sm text-gray800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray800 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_phone"
              className="peer-focus:font-medium absolute text-sm text-gray800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              {t("phoneNumber")}
            </label>
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-gray800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray800 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-gray800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              {t("firstName")}
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_last_name"
              id="floating_last_name"
              className="block py-2.5 px-0 w-full text-sm text-gray800 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-gray800 dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_last_name"
              className="peer-focus:font-medium absolute text-sm text-gray800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              {t("lastName")}
            </label>
          </div>
        </div>

        <div className="my-4">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray800 dark:text-gray800"
          >
            {t("message")}
          </label>
          <textarea
            id="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray900 bg-gray50 rounded-lg border border-gray300 focus:ring-blue500 focus:border-blue500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder={`${t("messPlaceHolder")}`}
            name="message"
          ></textarea>
        </div>

        <button
          type="submit"
          className="text-white bg-blue700 hover:bg-blue800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {t("submit")}
        </button>
      </form>
    </div>
  );
}
