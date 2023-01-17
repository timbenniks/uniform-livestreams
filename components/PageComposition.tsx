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

  return (
    <>
      <Head>
        <title>{title}</title>
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
