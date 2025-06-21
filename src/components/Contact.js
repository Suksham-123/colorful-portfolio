import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_s80n3ed",
        "template_7v7ig3z",
        form.current,
        "bvKCbOuxsQI2SEY2g"
      )
      .then(() => {
        setSuccess(true);
        form.current.reset();
      })
      .catch((error) => {
        console.error(error.text);
        setSuccess(false);
      });
  };

  return (
    <section id="contact" className="py-16 px-6 bg-white text-center dark:bg-black dark:text-white">
      <h2 className="text-4xl font-bold text-pink-600 dark:text-pink-400 mb-4">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto space-y-4">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="5"
          required
          className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        ></textarea>
        <button
          type="submit"
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded shadow-md"
        >
          Send Message
        </button>
        {success && <p className="text-green-500 mt-3">Message sent successfully!</p>}
      </form>
    </section>
  );
}
