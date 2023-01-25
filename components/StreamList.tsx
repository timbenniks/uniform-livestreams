import { registerUniformComponent, Slot } from "@uniformdev/canvas-react";

const StreamList: React.FC = () => (
  <div className="px-8 lg:px-0 py-20 bg-[#DCEEFF]">
    <section className="max-w-7xl m-auto ">
      <div className="max-w-xl mb-10">
        <Slot name="title" />
        <Slot name="description" />
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
