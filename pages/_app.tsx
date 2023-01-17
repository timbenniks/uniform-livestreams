import { UniformContext } from "@uniformdev/context-react";
import { UniformAppProps } from "@uniformdev/context-next";
import createUniformContext from "lib/uniform/uniformContext";

import "../styles/globals.css";
import { DM_Sans } from "@next/font/google";

const dmsans = DM_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-dmsans",
});

const clientContext = createUniformContext();

function MyApp({
  Component,
  pageProps,
  serverUniformContext,
}: UniformAppProps) {
  return (
    <UniformContext
      context={serverUniformContext ?? clientContext}
      outputType={"standard"}
    >
      <div className={`${dmsans.variable} font-sans`}>
        <Component {...pageProps} />
      </div>
    </UniformContext>
  );
}

export default MyApp;
