import {
  ComponentProps,
  registerUniformComponent,
  Slot,
} from "@uniformdev/canvas-react";

type StreamListProps = ComponentProps<{
  title: string;
  description: string;
}>;

const StreamList: React.FC<StreamListProps> = ({
  title,
  description,
}: StreamListProps) => (
  <div className="px-8 lg:px-0 py-20 bg-[#DCEEFF]">
    <section className="max-w-7xl m-auto ">
      <div className="max-w-xl">
        {title && (
          <h2 className="font-bold text-3xl md:text-5xl mb-2">{title}</h2>
        )}
        {description && <p className="mb-10">{description}</p>}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <Slot name="streams" />
      </div>
    </section>
  </div>
);

registerUniformComponent({
  type: "streamList",
  component: StreamList,
});

export default StreamList;
