import {
  ComponentProps,
  registerUniformComponent,
  Slot,
} from "@uniformdev/canvas-react";

type StreamListProps = ComponentProps<{
  component: {
    variant?: string;
  };
}>;

const StreamList: React.FC<StreamListProps> = ({
  component: { slots },
  component: { variant },
}: StreamListProps) => {
  let cols = "md:grid-cols-3";

  if (slots?.streams.length < 3) {
    cols = "md:grid-cols-2";
  }

  if (variant) {
    cols = "md:grid-cols-4";
  }

  return (
    <div className="px-8 lg:px-0 py-20 bg-[#DCEEFF]">
      <section className="max-w-7xl m-auto ">
        <div className="max-w-xl mb-10">
          <Slot name="title" />
          <Slot name="description" />
        </div>
        <div className={`grid grid-cols-1 ${cols} gap-8`}>
          <Slot name="streams" />
        </div>
      </section>
    </div>
  );
};

registerUniformComponent({
  type: "streamList",
  component: StreamList,
});

export default StreamList;
