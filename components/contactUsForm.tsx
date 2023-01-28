import {
  ComponentProps,
  registerUniformComponent,
  Slot,
} from "@uniformdev/canvas-react";

type ContactUsFormProps = ComponentProps<{
  background: string;
  lightVersion: boolean;
}>;

const ContactUsForm: React.FC<ContactUsFormProps> = ({
  background,
  lightVersion,
}: ContactUsFormProps) => (
  <div
    style={{ background: background ? background : "#19222F" }}
    className={lightVersion ? "text-black" : "text-white"}
  >
    <div className="max-w-7xl m-auto p-8 lg:py-8 lg:px-0">
      <article className="mb-8 max-w-4xl">
        <Slot name="title" />
        <Slot name="description" />
      </article>
      <form
        name="guest"
        method="POST"
        data-netlify="true"
        className="grid grid-cols-3 gap-4 max-w-4xl"
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
            className="px-3 py-[10px] w-full"
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
            className="px-3 py-[10px] w-full"
          />
        </div>

        <div className="">
          <button type="submit" className="cta">
            Send
          </button>
        </div>
      </form>
    </div>
  </div>
);

registerUniformComponent({
  type: "contactUsForm",
  component: ContactUsForm,
});

export default ContactUsForm;
