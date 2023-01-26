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

type ImageProps = ComponentProps<{
  image: Image[];
}>;

const Image: React.FC<ImageProps> = ({ image }: ImageProps) => (
  <img
    srcSet={(image && image[0]?.srcset) || ""}
    alt={(image && image[0]?.alt) || ""}
    width={(image && image[0]?.width) || ""}
    height={(image && image[0]?.height) || ""}
    className="block"
    loading="lazy"
  />
);

registerUniformComponent({
  type: "image",
  component: Image,
});

export default Image;
