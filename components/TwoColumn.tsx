import {
  ComponentProps,
  registerUniformComponent,
  Slot,
} from "@uniformdev/canvas-react";

type TwoColumnProps = ComponentProps<{
  background: string;
  lightVersion: boolean;
  component: {
    variant?: string;
  };
}>;

const TwoColumn: React.FC<TwoColumnProps> = ({
  lightVersion,
  background,
  component: { variant },
}: TwoColumnProps) => (
  <div
    style={{ background: background ? background : "#19222F" }}
    className={` px-8 py-12 ${lightVersion ? "text-black" : "text-white"}`}
  >
    <div className="max-w-7xl mx-auto">
      <article className="mb-8">
        <Slot name="title" />
        <Slot name="description" />
      </article>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        <div className="side-a">
          <Slot name="sideA" />
        </div>
        <div className="side-b">
          <Slot name="sideB" />
        </div>
      </div>
    </div>
  </div>
);

registerUniformComponent({
  type: "twoColumn",
  component: TwoColumn,
});

export default TwoColumn;
