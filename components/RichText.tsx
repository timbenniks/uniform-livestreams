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
  background?: string;
}>;

const RichText: React.FC<RichTextProps> = ({
  title,
  body,
  lightVersion,
  background,
}: RichTextProps) => (
  <div
    style={{ background: background ? background : "#19222F" }}
    className={` p-8 ${lightVersion ? "text-black" : "text-white"}`}
  >
    {title && <h3 className="font-bold text-3xl md:text-5xl mb-2">{title}</h3>}
    <div className="body" dangerouslySetInnerHTML={{ __html: body.rteValue }} />
  </div>
);

registerUniformComponent({
  type: "richText",
  component: RichText,
});

export default RichText;
