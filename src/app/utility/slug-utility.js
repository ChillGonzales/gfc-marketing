import {SERVICE_CITIES} from "@/app/areas-of-service/page";

export function getCityNameFromSlug(slug) {
  return `${slug}`
    .slice(0, -3) // remove -mi from end of slug
    .replaceAll("-", " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export const SERVICE_CITIES_FOR_SEO = SERVICE_CITIES.map((city) => `${city.toLowerCase().replaceAll(" ", "-")}-mi`);

export function getCitySlugs() {
  const cities = SERVICE_CITIES_FOR_SEO.map((city) => {
    return {
      city_slug: city,
    };
  });

  return cities;
}
