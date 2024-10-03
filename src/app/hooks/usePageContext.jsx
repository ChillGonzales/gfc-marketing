// export type PageName =
//   | "home"
//   | "services"
//   | "gallery"
//   | "about-us"
//   | "careers"
//   | "areas-of-service"
//   | "contact"
//   | "design-build"
//   | "drainage"
//   | "gardening"
//   | "lawn-maintenance"
//   | "lighting"
//   | "irrigation"
//   | "hardscapes"
//   | "plantings"
//   | "water-features";
//
// export interface PageContext {
//   name: PageName;
//   title: string;
//   description: string;
//   header1Text: string;
// }

export default function usePageContext(pageName, cityName) {
  switch (pageName) {
    case "home": {
      return {
        name: "home",
        title:
          cityName === "West Michigan"
            ? `West Michigan Landscaping Services | Clark's Landscape`
            : `${cityName}, Michigan Landscaping | Clark's Landscape`,
        description: `Clark’s Landscape is a landscaping company that serves ${cityName}, and surrounding areas. We offer custom landscape design, gardening, and more!`,
        header1Text: `Premier Landscaping Services for ${cityName}`,
      };
    }
    case "design-build": {
      return {
        name: "design-build",
        title: `${cityName}, Michigan Custom Landscape Design | Clark's Landscape`,
        description: `We are proud to offer Custom Landscape Design services for ${cityName}.`,
        header1Text: `${cityName} Custom Landscape Design`,
      };
    }
    case "hardscapes": {
      return {
        name: "hardscapes",
        title: `${cityName}, Michigan Patios, Decks, Retaining Walls and Pavers`,
        description: `We are proud to offer premier Patio, Deck, and Hardscaping services for ${cityName}, Michigan.`,
        header1Text: `${cityName} Patios, Decks and More`,
      };
    }
    case "plantings": {
      return {
        name: "plantings",
        title: `${cityName}, Michigan Planting Services | Clark's Landscape`,
        description: `We are proud to offer premier planting services for ${cityName}, Michigan.`,
        header1Text: `${cityName} Planting Services`,
      };
    }
    case "water-features": {
      return {
        name: "water-features",
        title: `Ponds and Water Features in ${cityName}, Michigan`,
        description: `We are proud to offer premier water feature design and construction for ${cityName}, Michigan.`,
        header1Text: `${cityName} Ponds and Water Features`,
      };
    }
    case "drainage": {
      return {
        name: "drainage",
        title: `Yard Drainage Services in ${cityName}, Michigan`,
        description: `We are proud to offer yard drainage contracting services for ${cityName}, Michigan.`,
        header1Text: `${cityName} Yard Drainage Solutions`,
      };
    }
    case "gardening": {
      return {
        name: "gardening",
        title: `Flower Bed Services and Maintenance in ${cityName}, Michigan`,
        description: `We are proud to offer flower bed maintenance services for ${cityName}, Michigan.`,
        header1Text: `${cityName} Gardening and Flower Bed Maintenance`,
      };
    }
    case "lawn-care": {
      return {
        name: "lawn-care",
        title: `Lawn Care and Mowing Services in ${cityName}, Michigan`,
        description: `We are proud to offer lawn care and lawn mowing services for ${cityName}, Michigan.`,
        header1Text: `${cityName} Lawn Care Services`,
      };
    }
    case "irrigation": {
      return {
        name: "irrigation",
        title: `Underground Sprinkling and Irrigation Systems in ${cityName}, Michigan`,
        description: `We are proud to offer underground sprinkling and irrigation systems for ${cityName}, Michigan.`,
        header1Text: `${cityName} Underground Sprinkling Services`,
      };
    }
    case "lighting": {
      return {
        name: "lighting",
        title: `Outdoor and Landscape Lighting in ${cityName}, Michigan`,
        description: `We are proud to offer outdoor and landscape lighting services for ${cityName}, Michigan.`,
        header1Text: `Your ${cityName} Outdoor Lighting Experts`,
      };
    }
    case "reference-files": {
      return {
        name: "reference-files",
        title: "Reference Files | Clark's Landscape",
        description: "Reference Files for Clark's Landscape",
        header1Text: "Reference Files",
      };
    }
    case "areas-of-service": {
      return {
        name: "areas-of-service",
        title: "Areas of Service | Clark's Landscape",
        description: "Areas of Service for Clark's Landscape",
        header1Text: "Areas of Service",
      };
    }
    case "about-us": {
      return {
        name: "about-us",
        title: "About Us | Clark's Landscape",
        description: "Learn about Clark's Landscape",
        header1Text: "Community, Family, and Excellence",
      };
    }
  }
}
