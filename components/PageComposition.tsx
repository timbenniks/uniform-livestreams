import Head from "next/head";
import { RootComponentInstance } from "@uniformdev/canvas";
import {
  Composition,
  Slot,
  useContextualEditing,
  createApiEnhancer,
} from "@uniformdev/canvas-react";

import "./components";
import Header from "./Header";
import Footer from "./Footer";

export default function PageComposition({
  composition,
}: {
  preview: boolean;
  composition: RootComponentInstance;
}) {
  const { composition: compositionInstance } = useContextualEditing({
    initialCompositionValue: composition,
    enhance: createApiEnhancer({
      apiUrl: "/api/preview",
    }),
  });

  if (!compositionInstance) {
    return null;
  }

  const title = compositionInstance.parameters.title.value as string;
  const description = compositionInstance.parameters.description
    .value as string;
  const image = compositionInstance.parameters.image.value[0];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta
          property="og:image"
          content={image?.srcset.replace(" 1200w", "")}
        />
      </Head>
      <>
        <Header />
        <main>
          <Composition data={compositionInstance} behaviorTracking="onLoad">
            <Slot name="content" />
          </Composition>
        </main>
        <Footer />
      </>
    </>
  );
}
