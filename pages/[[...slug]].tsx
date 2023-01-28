import { GetServerSidePropsContext } from "next";
import PageComposition from "@/components/PageComposition";
import {
  getCompositionBySlug,
  getNavigationItems,
} from "lib/uniform/canvasClient";

const CanvasPage = (props) => PageComposition(props);

export default CanvasPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { slug } = context?.params || {};
  const slugString = Array.isArray(slug) ? slug.join("/") : slug;
  const slashedSlug = !slugString
    ? "/"
    : slugString.startsWith("/")
    ? slugString
    : `/${slugString}`;

  const { preview = false } = context;
  const composition = await getCompositionBySlug(slashedSlug, preview);
  const nodes = await getNavigationItems();

  return {
    props: {
      composition,
      nodes,
      preview,
    },
  };
}
