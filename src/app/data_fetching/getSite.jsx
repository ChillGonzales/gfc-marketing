"use server";

// NextJS doesn't let you use context on the server, need to use fetch instead
// https://nextjs.org/docs/app/building-your-application/data-fetching/fetching#reusing-data-across-multiple-functions
export async function getSite(siteId) {
  const result = await fetch(
    `http://localhost:3000/sites/${siteId}?format=json`,
  );
  const site = await result.json();

  console.log(site);

  return site;
}
