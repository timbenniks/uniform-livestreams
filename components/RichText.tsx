import {
  ComponentProps,
  registerUniformComponent,
} from "@uniformdev/canvas-react";

type RichTextProps = ComponentProps<{
  title: string;
  body: {
    rteValue: string;
  };
  lightVersion: boolean;
  noPadding: boolean;
  background?: string;
}>;

const RichText: React.FC<RichTextProps> = ({
  title,
  body,
  lightVersion,
  noPadding,
  background,
}: RichTextProps) => (
  <div
    style={{ background: background ? background : "none" }}
    className={`${lightVersion ? "text-black" : "text-white"} ${
      noPadding ? "p-0" : "p-8"
    }`}
  >
    {title && <h3 className="font-bold text-3xl md:text-5xl mb-2">{title}</h3>}
    {body && (
      <div
        className="text-lg"
        dangerouslySetInnerHTML={{ __html: body?.rteValue }}
      />
    )}
  </div>
);

registerUniformComponent({
  type: "richText",
  component: RichText,
});

export default RichText;
