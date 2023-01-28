import {
  ComponentProps,
  registerUniformComponent,
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
  externalImage: string;
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
  externalImage,
  component: { variant },
}: PersonCardProps) => (
  <div
    className={`person-card flex mb-4 flex-col-reverse ${
      !variant ? "lg:flex-row-reverse" : ""
    } `}
  >
    <article
      className={`bg-white p-4 lg:p-8 text-black ${
        !variant ? "lg:w-7/12" : ""
      } `}
    >
      <h4 className="font-bold text-2xl mb-2">{name}</h4>
      <ul className="text-sm">
        {jobTitle && <li className="font-bold">{jobTitle}</li>}
        {company && <li className="mb-4">{company}</li>}
        {socialMediaHandle && (
          <li>
            <a
              className="text-black underline"
              href={socialMediaLink}
              target="_blank"
            >
              {socialMediaHandle}
            </a>
          </li>
        )}
      </ul>
    </article>
    {externalImage && (
      <img
        srcSet={`https://res.cloudinary.com/dwfcofnrd/image/upload/q_auto,f_auto,ar_1:1,c_crop,g_face/w_400/${externalImage} 400w, https://res.cloudinary.com/dwfcofnrd/image/upload/q_auto,f_auto,ar_1:1,c_crop,g_face/w_600/${externalImage} 600w, https://res.cloudinary.com/dwfcofnrd/image/upload/q_auto,f_auto,ar_1:1,c_crop,g_face/w_1000/${externalImage} 1000w`}
        alt={name}
        width={400}
        height={400}
        className={`block self-center ${!variant ? "lg:w-5/12" : ""} `}
        loading="lazy"
      />
    )}

    {image && (
      <img
        srcSet={image[0]?.srcset || ""}
        alt={image[0]?.alt || ""}
        width={image[0]?.width || ""}
        height={image[0]?.height || ""}
        className={`block self-center ${!variant ? "lg:w-5/12" : ""} `}
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
