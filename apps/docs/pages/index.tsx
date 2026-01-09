import Head from "next/head";

import Code from "../components/Code";
import Documentation from "../components/Documentation";
import Footer from "../components/Footer";
import Header from "../components/Header";


export default function Docs() {
  return (
    <div className="bg-background">
      <Head>
        <title>Dad Lang - Programming Language</title>
        <meta property="og:title" content="Dad Lang - Programming Language" key="title" />
        <meta property="og:type" content="website" key="type" />
        <meta property="og:description" content="Dad Lang is a dynamically typed programming language written in TypeScript." key="description" />
        <meta name="description" content="Dad Lang is a dynamically typed programming language written in TypeScript." />
        <meta property="og:site_name" content="Dad Lang Documentation" key="siteName" />
      </Head>
      <Header />
      <Code />
      <Documentation />
      <Footer />
    </div>
  );
}

