import Back from "@/components/Back";
import Footer from "@/components/Footer";
import ScreenPage from "@/components/ScreenPage";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Connect: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [budget, setBudget] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  return (
    <div className=" h-[calc(100vh-50px)]">
      <ScreenPage>
        <div className="col gap-8 p-4 md:p-16">
          <Back />
          <h1 className="text-3xl">C O N N E C T</h1>
          <p>
            If you have any questions, inquiries, or just want to say hi, feel
            free to reach out to me! You can use the contact form to send a
            direct message, connect with me through social media, or send an
            email to{" "}
            <a className="underline" href="mailto:sheilgandhi24@hotmail.com">
              sheilgandhi24@hotmail.com
            </a>
            . I look forward to hearing from you.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 border-black border-2">
            <div
              style={{ backgroundColor: "#f9ef2a" }}
              className="text-black border-black border-b-2 md:border-r-2 md:border-b-0"
            >
              <form
                action="https://formsubmit.co/sheilgandhi24@hotmail.com"
                method="POST"
                className="col gap-4 p-4"
              >
                <div className="col gap-2">
                  <label className="font-bold" htmlFor="name">
                    N A M E
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="border-black border-4"
                  />
                </div>
                <div className="col gap-2">
                  <label className="font-bold" htmlFor="name">
                    B U D G E T
                  </label>
                  <input
                    type="text"
                    name="budget"
                    value={budget}
                    onChange={(event) => setBudget(event.target.value)}
                    className="border-black border-4"
                  />
                </div>
                <div className="col gap-2">
                  <label className="font-bold" htmlFor="name">
                    E M A I L
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    className="border-black border-4"
                  />
                </div>
                <div className="col gap-2">
                  <label className="font-bold" htmlFor="name">
                    M E S S A G E
                  </label>
                  <textarea
                    name="message"
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    className="h-56 border-black border-4"
                  />
                </div>
                <input
                  type="submit"
                  value="SUBMIT"
                  className="bg-black md:w-1/4 px-4 py-2 text-white cursor-pointer transition duration-500 ease-in-out hover:bg-yellow-400 hover:text-black"
                />
              </form>
            </div>
            <div
              style={{
                background:
                  "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv4xOLlAMcZpp3_InWaT_AAX2TR-NpTC53Uw&usqp=CAU)",
              }}
              className="grid grid-cols-2 gap-16 p-16 place-items-center"
            >
              <a
                href="https://www.instragram.com/sheilgandhi"
                target="_blank"
                referrerPolicy="no-referrer"
                className="fa fa-instagram bg-black text-white p-8 rounded-3xl text-7xl"
              />
              <a
                href="https://www.linkedin.com/me/sheilgandhi"
                target="_blank"
                referrerPolicy="no-referrer"
                className="fa fa-linkedin bg-black text-white p-8 rounded-3xl text-7xl"
              />
              <a
                href="https://www.github.com/sheilgandhi"
                target="_blank"
                referrerPolicy="no-referrer"
                className="fa fa-github bg-black text-white p-8 rounded-3xl text-7xl"
              />
              <a
                href="https://www.instragram.com/sheilgandhi"
                target="_blank"
                referrerPolicy="no-referrer"
                className="fa fa-coffee bg-black text-white p-8 rounded-3xl text-7xl"
              ></a>
            </div>
          </div>
        </div>
      </ScreenPage>
      <Footer />
    </div>
  );
};

export default Connect;
