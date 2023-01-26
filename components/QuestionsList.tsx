import { registerUniformComponent, Slot } from "@uniformdev/canvas-react";

const QuestionsList: React.FC = () => (
  <div className="max-w-7xl mx-auto">
    <article>
      <Slot name="title" />
      <Slot name="description" />
    </article>

    <ul>
      <Slot name="questions" />
    </ul>
  </div>
);

registerUniformComponent({
  type: "questionsList",
  component: QuestionsList,
});

export default QuestionsList;
