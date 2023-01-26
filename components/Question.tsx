import {
  ComponentProps,
  registerUniformComponent,
} from "@uniformdev/canvas-react";

type QuestionProps = ComponentProps<{
  number: string;
  question: string;
}>;

const Question: React.FC<QuestionProps> = ({
  number,
  question,
}: QuestionProps) => (
  <li className="overflow-hidden bg-white text-[#0052ED] border-b-2 border-[#19222F]">
    <span className="font-bold text-3xl py-4 w-16 float-left flex items-center justify-center">
      {number}
    </span>
    <span className="border-l-2 border-[#19222F] py-4 font-bold flex items-center px-3">
      {question}
    </span>
  </li>
);

registerUniformComponent({
  type: "question",
  component: Question,
});

export default Question;
