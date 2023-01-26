import {
  ComponentProps,
  registerUniformComponent,
  Slot,
} from "@uniformdev/canvas-react";

type Image = {
  id: string;
  rawurl: string;
  baseurl: string;
  width: string;
  transdormedurl: string;
  height: string;
  alt: string;
  caption: string;
  srcset: string;
};

type PersonCardProps = ComponentProps<{
  name: string;
  jobTitle: string;
  socialMediaHandle: string;
  image: Image[];
  company: string;
  socialMediaLink: string;
  component: {
    variant?: string;
  };
}>;

const PersonCard: React.FC<PersonCardProps> = ({
  name,
  jobTitle,
  socialMediaHandle,
  image,
  company,
  socialMediaLink,
  component: { variant },
}: PersonCardProps) => (
  <div className="person-card flex flex-row-reverse mb-4">
    <article className="bg-white p-8 text-black w-7/12">
      <h4 className="font-bold text-3xl mb-2">{name}</h4>
      <ul>
        <li>
          <a
            className="text-black underline"
            href={socialMediaLink}
            target="_blank"
          >
            {socialMediaHandle}
          </a>
        </li>
        <li>
          {jobTitle} at {company}
        </li>
      </ul>
    </article>
    {image && (
      <img
        srcSet={image[0]?.srcset || ""}
        alt={image[0]?.alt || ""}
        width={image[0]?.width || ""}
        height={image[0]?.height || ""}
        className="block w-5/12 self-center"
        loading="lazy"
      />
    )}
  </div>
);

registerUniformComponent({
  type: "personCard",
  component: PersonCard,
});

export default PersonCard;
