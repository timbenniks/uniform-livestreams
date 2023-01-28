import {
  ComponentProps,
  registerUniformComponent,
  Slot,
} from "@uniformdev/canvas-react";
import { useState } from "react";

type ContactUsFormProps = ComponentProps<{
  background: string;
  lightVersion: boolean;
}>;

const ContactUsForm: React.FC<ContactUsFormProps> = ({
  background,
  lightVersion,
}: ContactUsFormProps) => {
  const [form, setForm] = useState({
    "form-name": "guest",
    name: "",
    email: "",
  });

  const [showThankYou, setShowThankYou] = useState(false);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  const encode = (data: { [key: string]: any }) =>
    Object.keys(data)
      .map(
        (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
      )
      .join("&");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode(form),
    })
      .then(() => {
        setShowThankYou(true);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div
      style={{ background: background ? background : "#19222F" }}
      className={lightVersion ? "text-black" : "text-white"}
    >
      <div className="max-w-7xl m-auto p-8 lg:py-8 lg:px-0">
        <article className="mb-8 max-w-4xl">
          <Slot name="title" />
          <Slot name="description" />
        </article>

        {showThankYou ? (
          <p className="text-xl font-bold p-4 bg-[#0052ED] text-white mb-4 inline-block">
            Thanks for reaching out!
          </p>
        ) : (
          <form
            name="guest"
            method="POST"
            data-netlify="true"
            className="grid grid-cols-3 gap-4 max-w-4xl"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="guest" />

            <div className="mb-4">
              <label htmlFor="name" className="sr-only">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Name"
                required
                className="px-3 py-[10px] w-full text-black"
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                required
                className="px-3 py-[10px] w-full text-black"
                onChange={handleChange}
              />
            </div>

            <div className="">
              <button type="submit" className="cta">
                Send
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

registerUniformComponent({
  type: "contactUsForm",
  component: ContactUsForm,
});

export default ContactUsForm;
