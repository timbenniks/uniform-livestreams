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

type HeroProps = ComponentProps<{
  image: Image[];
  lightVersion: boolean;
  background?: string;
  component: {
    variant?: string;
  };
}>;

const Hero: React.FC<HeroProps> = ({
  image,
  lightVersion,
  background,
  component: { variant },
}: HeroProps) => (
  <div
    style={{ background: background ? background : "#19222F" }}
    className={`${lightVersion ? "text-[#001C6C]" : "text-white"} hero-${
      variant ? variant : "default"
    } ${lightVersion ? "hero-light" : ""}`}
  >
    <div
      className={`flex ${
        variant
          ? "flex-col-reverse md:flex-row-reverse"
          : "flex-col md:flex-row"
      } max-w-7xl mx-auto md:aspect-[1280/573]`}
    >
      <div className="md:w-2/4 flex md:items-center justify-center">
        <article className="max-w-xl p-8 md:p-0">
          <Slot name="title" />
          <Slot name="description" />

          <div className="flex space-y-3 md:space-x-3 md:space-y-0 flex-col md:flex-row text-center mt-4">
            <Slot name="primaryCta" />
            <Slot name="secondaryCta" />
          </div>
        </article>
      </div>
      <div className="md:w-2/4">
        {image ? (
          <img
            srcSet={image[0]?.srcset || ""}
            alt={image[0]?.alt || ""}
            width={image[0]?.width || ""}
            height={image[0]?.height || ""}
            className="block"
            loading="eager"
          />
        ) : (
          <img
            srcSet="https://res.cloudinary.com/dwfcofnrd/image/upload/q_auto,f_auto,ar_640:573,c_fill/w_700/Screenshot_2023-01-25_at_14.19.56_zhe8a9.png"
            alt="No image added"
            width="640"
            height="573"
            className="block"
            loading="eager"
          />
        )}
      </div>
    </div>
  </div>
);

registerUniformComponent({
  type: "hero",
  component: Hero,
});

export default Hero;
