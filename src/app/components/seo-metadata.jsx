"use client";
import { useEffect, useState } from "react";

export default function SeoMetadata({ title, description }) {
  const [url, setUrl] = useState("");
  useEffect(() => {
    if (document != undefined) {
      setUrl(document.URL);
    }
  });
  return (
    <>
      <title>{title}</title>
      <meta name={"description"} content={description} />
      <link rel={"canonical"} href={url} />
      <meta property={"og:title"} content={title} />
      <meta property={"og:description"} content={description} />
      <meta property={"twitter:card"} content="summary" />
      <meta property={"twitter:title"} content={title} />
      <meta property={"twitter:description"} content={description} />
    </>
  );
}
