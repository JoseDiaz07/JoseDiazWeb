import { RiInstagramFill } from "react-icons/ri";
import { BsGithub } from "react-icons/bs";
import { FaDev } from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser"
export const Footer = () => {
  const form = useRef()
  const date = new Date()
  let year = date.getFullYear()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('Portfolio', 'template_amgc7jp', form.current, '7Kg2oCK8qyZmPM9z_')
      .then((result) => {
        console.log(result.text);
        e.target.reset()
      }, (error) => {
        console.log(error.text);
      });

    setEmail("")
  };

  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("");
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const onEmail = (e) => {
    const mailValidation = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    const enteredEmail = e.target.value;
    setEmail(enteredEmail);

    if (enteredEmail.match(mailValidation)) {
      setEmailError("");
      setSubmitDisabled(false);
    } else if (!enteredEmail.match(mailValidation) && enteredEmail.length > 5) {
      setEmailError("Please enter a valid email");
      setSubmitDisabled(true);
    }
  };
  return (
    <footer className="text-center md:text-left">
      <div className="text-white dark:text-black p-4 bg-zinc-900 dark:bg-slate-100 md:px-20 md:flex justify-between pb-10 md:pb-16">
        <div className="w-80 md:w-96 text-start">
          <div className="font-serif text-4xl font-semibold">
            <span>Contact me</span>
          </div>
          <div>
            <p className="mt-4 w-54">Feel free to contact me if you have any questions or would like to learn more about my work.</p>

            <div className="my-4">
              <h4 className="text-lg font-semibold font-serif">Email</h4>
              <p>joseliasdiazm@gmail.com</p>
            </div>
          </div>

          <div className="mt-8 flex rounded-l just gap-5">
            <a href="https://github.com/jeliasdiaz" target="_blank" rel="noreferrer"><BsGithub size={30} className=" hover:text-slate-400 dark:hover:text-slate-600 hover:scale-110 transition" /></a>
            <a href="https://www.instagram.com/jeliasdiazm/" target="_blank" rel="noreferrer"><RiInstagramFill size={30} className="hover:text-slate-400 dark:hover:text-slate-600 hover:scale-110 transition" /></a>
            <a href="https://dev.to/jeliasdiaz" target="_blank" rel="noreferrer"><FaDev size={30} className=" hover:text-slate-400 dark:hover:text-slate-600 hover:scale-110 transition" /></a>
          </div>
        </div>
        <div className="mt-5 md:w-[55%]">
          <form ref={form} onSubmit={sendEmail} >
            <div className="md:flex gap-5">
              <input className="w-full bg-[#28292a] dark:bg-slate-300 p-2 rounded-md focus:ring-1 focus:ring-red-300 focus:outline-none my-2 md:my-0 dark:placeholder:text-slate-800" placeholder="Name" name="user_name" required autoComplete="off" />
              <div className="w-full">
                <input className="w-full bg-[#28292a] dark:bg-slate-300 p-2 rounded-md focus:ring-1 focus:ring-red-300 focus:outline-none dark:placeholder:text-slate-800" placeholder="Email" name="user_email" value={email} onInput={onEmail} autoComplete="off" />
                {submitDisabled && <small className="text-red-400">{emailError}</small>}
              </div>
            </div>

            <div className="w-full">
              <textarea className="w-full bg-[#28292a] dark:bg-slate-300 placeholder:text-start p-2 rounded-md mt-4 h-36 resize-none focus:ring-1 focus:ring-red-300 focus:outline-none dark:placeholder:text-slate-800" placeholder="Message" name="message" required autoComplete="off" spellCheck="false"></textarea>
            </div>
            <div className="w-100 mt-3">
              {
                emailError
                  ? <button className="w-full text-center align-middle bg-red-400 dark:bg-red-300 hover:bg-red-500 dark:hover:bg-red-400 transition duration-200 p-3 rounded-md text-black font-bold cursor-pointer" disabled >Send</button>
                  : <button className="w-full text-center  align-middle bg-red-400 dark:bg-red-300 hover:bg-red-500 dark:hover:bg-red-400 transition p-3 rounded-md text-black font-bold cursor-pointer" disabled={submitDisabled}>Send</button>
              }
            </div>
          </form>
        </div>

      </div>
        <h4 className="text-slate-400 dark:text-slate-700 bg-zinc-900 dark:bg-slate-100 text-center font-mono p-4">{year} José Díaz Portfolio</h4>
    </footer>
  )
}