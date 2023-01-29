import { getServerSideSitemap } from "next-sitemap";
import { GetServerSideProps } from "next";
import { getNavigationItems } from "../../lib/uniform/canvasClient";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const links = await getNavigationItems();

  const fields = links.map((link) => {
    return {
      loc: `https://uniform-livestreams.netlify.app${link.path}`,
    };
  });

  return getServerSideSitemap(ctx, fields);
};

export default function Sitemap() {}
