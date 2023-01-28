import {
  ComponentProps,
  registerUniformComponent,
  Slot,
} from "@uniformdev/canvas-react";

type RichTextProps = ComponentProps<{
  body: {
    rteValue: string;
  };
  lightVersion: boolean;
  background?: string;
  standalone: boolean;
}>;

const RichText: React.FC<RichTextProps> = ({
  body,
  lightVersion,
  background,
  standalone,
}: RichTextProps) => (
  <div
    style={{ background: background ? background : "none" }}
    className={`rich-text ${lightVersion ? "text-black" : "text-white"}`}
  >
    <article
      className={`${standalone ? "max-w-7xl m-auto p-8 lg:px-0" : "p-0"}`}
    >
      <Slot name="title" />
      {body && (
        <div
          className="text-lg"
          dangerouslySetInnerHTML={{ __html: body?.rteValue }}
        />
      )}
    </article>
  </div>
);

registerUniformComponent({
  type: "richText",
  component: RichText,
});

export default RichText;
