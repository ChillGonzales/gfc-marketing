const config = {
  plugins: [require("@tailwindcss/forms")],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-open-sans)", "sans-serif"],
      serif: ["var(--font-merriweather)", "serif"],
    },
    extend: {
      animation: {
        "fade-in": "fadeIn 1s ease-in-out",
        "slide-in": "slideIn 1s ease-in-out",
      },
      keyframes: (theme) => ({
        slideIn: {
          "0%": { opacity: "0%", transform: "translateY(-5%)" },
          "100%": { opacity: "100%", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0%" },
          "100%": { opacity: "100%" },
        },
      }),
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:
        // Palette 4
        {
          // Brand
          main: "#0C6B58",

          // Primary
          "main-050": "#EFFCF6",
          "main-100": "#C6F7E2",
          "main-200": "#8EEDC7",
          "main-300": "#65D6AD",
          "main-400": "#3EBD93",
          "main-500": "#27AB83",
          "main-600": "#199473",
          "main-700": "#147D64",
          "main-800": "#0C6B58",
          "main-900": "#014D40",
          "main-950": "#00241e",

          // red
          "red-050": "#FFEEEE",
          "red-100": "#FACDCD",
          "red-200": "#F29B9B",
          "red-300": "#E66A6A",
          "red-400": "#D64545",
          "red-500": "#BA2525",
          "red-600": "#A61B1B",
          "red-700": "#911111",
          "red-800": "#780A0A",
          "red-900": "#610404",

          // red vivid
          "red-vivid-050": "#FFE3E3",
          "red-vivid-100": "#FFBDBD",
          "red-vivid-200": "#FF9B9B",
          "red-vivid-300": "#F86A6A",
          "red-vivid-400": "#EF4E4E",
          "red-vivid-500": "#E12D39",
          "red-vivid-600": "#CF1124",
          "red-vivid-700": "#AB091E",
          "red-vivid-800": "#8A041A",
          "red-vivid-900": "#610316",
          "red-vivid-950": "#610316",

          // orange
          "orange-050": "#FFEFE6",
          "orange-100": "#FFD3BA",
          "orange-200": "#FAB38B",
          "orange-300": "#EF8E58",
          "orange-400": "#E67635",
          "orange-500": "#C65D21",
          "orange-600": "#AB4E19",
          "orange-700": "#8C3D10",
          "orange-800": "#77340D",
          "orange-900": "#572508",

          // orange vivid
          "orange-vivid-050": "#FFE8D9",
          "orange-vivid-100": "#FFD0B5",
          "orange-vivid-200": "#FFB088",
          "orange-vivid-300": "#FF9466",
          "orange-vivid-400": "#F9703E",
          "orange-vivid-500": "#F35627",
          "orange-vivid-600": "#DE3A11",
          "orange-vivid-700": "#C52707",
          "orange-vivid-800": "#AD1D07",
          "orange-vivid-900": "#841003",

          // yellow
          "yellow-050": "#FFFAEB",
          "yellow-100": "#FCEFC7",
          "yellow-200": "#F8E3A3",
          "yellow-300": "#F9DA8B",
          "yellow-400": "#F7D070",
          "yellow-500": "#E9B949",
          "yellow-600": "#C99A2E",
          "yellow-700": "#A27C1A",
          "yellow-800": "#7C5E10",
          "yellow-900": "#513C06",

          // yellow vivid
          "yellow-vivid-050": "#FFFBEA",
          "yellow-vivid-100": "#FFF3C4",
          "yellow-vivid-200": "#FCE588",
          "yellow-vivid-300": "#FADB5F",
          "yellow-vivid-400": "#F7C948",
          "yellow-vivid-500": "#F0B429",
          "yellow-vivid-600": "#DE911D",
          "yellow-vivid-700": "#CB6E17",
          "yellow-vivid-800": "#B44D12",
          "yellow-vivid-900": "#8D2B0B",

          // lime green
          "lime-green-050": "#F2FDE0",
          "lime-green-100": "#E2F7C2",
          "lime-green-200": "#C7EA8F",
          "lime-green-300": "#ABDB5E",
          "lime-green-400": "#94C843",
          "lime-green-500": "#7BB026",
          "lime-green-600": "#63921A",
          "lime-green-700": "#507712",
          "lime-green-800": "#42600C",
          "lime-green-900": "#2B4005",

          // lime green vivid
          "lime-green-vivid-050": "#F8FFED",
          "lime-green-vivid-100": "#E6FFBF",
          "lime-green-vivid-200": "#CAFF84",
          "lime-green-vivid-300": "#AFF75C",
          "lime-green-vivid-400": "#8DED2D",
          "lime-green-vivid-500": "#6CD410",
          "lime-green-vivid-600": "#5CB70B",
          "lime-green-vivid-700": "#399709",
          "lime-green-vivid-800": "#2E7B06",
          "lime-green-vivid-900": "#1E5303",

          // green
          "green-050": "#E3F9E5",
          "green-100": "#C1EAC5",
          "green-200": "#A3D9A5",
          "green-300": "#7BC47F",
          "green-400": "#57AE5B",
          "green-500": "#3F9142",
          "green-600": "#2F8132",
          "green-700": "#207227",
          "green-800": "#0E5814",
          "green-900": "#05400A",

          // green vivid
          "green-vivid-050": "#E3F9E5",
          "green-vivid-100": "#C1F2C7",
          "green-vivid-200": "#91E697",
          "green-vivid-300": "#51CA58",
          "green-vivid-400": "#31B237",
          "green-vivid-500": "#18981D",
          "green-vivid-600": "#0F8613",
          "green-vivid-700": "#0E7817",
          "green-vivid-800": "#07600E",
          "green-vivid-900": "#014807",

          // teal
          "teal-050": "#EFFCF6",
          "teal-100": "#C6F7E2",
          "teal-200": "#8EEDC7",
          "teal-300": "#65D6AD",
          "teal-400": "#3EBD93",
          "teal-500": "#27AB83",
          "teal-600": "#199473",
          "teal-700": "#147D64",
          "teal-800": "#0C6B58",
          "teal-900": "#014D40",

          // teal vivid
          "teal-vivid-050": "#F0FCF9",
          "teal-vivid-100": "#C6F7E9",
          "teal-vivid-200": "#8EEDD1",
          "teal-vivid-300": "#5FE3C0",
          "teal-vivid-400": "#2DCCA7",
          "teal-vivid-500": "#17B897",
          "teal-vivid-600": "#079A82",
          "teal-vivid-700": "#048271",
          "teal-vivid-800": "#016457",
          "teal-vivid-900": "#004440",

          // cyan
          "cyan-050": "#E0FCFF",
          "cyan-100": "#BEF8FD",
          "cyan-200": "#87EAF2",
          "cyan-300": "#54D1DB",
          "cyan-400": "#38BEC9",
          "cyan-500": "#2CB1BC",
          "cyan-600": "#14919B",
          "cyan-700": "#0E7C86",
          "cyan-800": "#0A6C74",
          "cyan-900": "#044E54",

          // cyan vivid
          "cyan-vivid-050": "#E1FCF8",
          "cyan-vivid-100": "#C1FEF6",
          "cyan-vivid-200": "#92FDF2",
          "cyan-vivid-300": "#62F4EB",
          "cyan-vivid-400": "#3AE7E1",
          "cyan-vivid-500": "#1CD4D4",
          "cyan-vivid-600": "#0FB5BA",
          "cyan-vivid-700": "#099AA4",
          "cyan-vivid-800": "#07818F",
          "cyan-vivid-900": "#05606E",

          // light blue
          "light-blue-050": "#EBF8FF",
          "light-blue-100": "#D1EEFC",
          "light-blue-200": "#A7D8F0",
          "light-blue-300": "#7CC1E4",
          "light-blue-400": "#55AAD4",
          "light-blue-500": "#3994C1",
          "light-blue-600": "#2D83AE",
          "light-blue-700": "#1D6F98",
          "light-blue-800": "#166086",
          "light-blue-900": "#0B4F71",

          // light blue vivid
          "light-blue-vivid-050": "#E3F8FF",
          "light-blue-vivid-100": "#B3ECFF",
          "light-blue-vivid-200": "#81DEFD",
          "light-blue-vivid-300": "#5ED0FA",
          "light-blue-vivid-400": "#40C3F7",
          "light-blue-vivid-500": "#2BB0ED",
          "light-blue-vivid-600": "#1992D4",
          "light-blue-vivid-700": "#127FBF",
          "light-blue-vivid-800": "#0B69A3",
          "light-blue-vivid-900": "#035388",

          // blue
          "blue-050": "#DCEEFB",
          "blue-100": "#B6E0FE",
          "blue-200": "#84C5F4",
          "blue-300": "#62B0E8",
          "blue-400": "#4098D7",
          "blue-500": "#2680C2",
          "blue-600": "#186FAF",
          "blue-700": "#0F609B",
          "blue-800": "#0A558C",
          "blue-900": "#003E6B",

          // blue vivid
          "blue-vivid-050": "#E6F6FF",
          "blue-vivid-100": "#BAE3FF",
          "blue-vivid-200": "#7CC4FA",
          "blue-vivid-300": "#47A3F3",
          "blue-vivid-400": "#2186EB",
          "blue-vivid-500": "#0967D2",
          "blue-vivid-600": "#0552B5",
          "blue-vivid-700": "#03449E",
          "blue-vivid-800": "#01337D",
          "blue-vivid-900": "#002159",

          // indigo
          "indigo-050": "#E0E8F9",
          "indigo-100": "#BED0F7",
          "indigo-200": "#98AEEB",
          "indigo-300": "#7B93DB",
          "indigo-400": "#647ACB",
          "indigo-500": "#4C63B6",
          "indigo-600": "#4055A8",
          "indigo-700": "#35469C",
          "indigo-800": "#2D3A8C",
          "indigo-900": "#19216C",

          // indigo vivid
          "indigo-vivid-050": "#D9E8FF",
          "indigo-vivid-100": "#B0D0FF",
          "indigo-vivid-200": "#88B1FC",
          "indigo-vivid-300": "#5E8AEE",
          "indigo-vivid-400": "#3A66DB",
          "indigo-vivid-500": "#2251CC",
          "indigo-vivid-600": "#1D3DBF",
          "indigo-vivid-700": "#132DAD",
          "indigo-vivid-800": "#0B1D96",
          "indigo-vivid-900": "#061178",

          // purple
          "purple-050": "#EAE2F8",
          "purple-100": "#CFBCF2",
          "purple-200": "#A081D9",
          "purple-300": "#8662C7",
          "purple-400": "#724BB7",
          "purple-500": "#653CAD",
          "purple-600": "#51279B",
          "purple-700": "#421987",
          "purple-800": "#34126F",
          "purple-900": "#240754",

          // purple vivid
          "purple-vivid-050": "#F2EBFE",
          "purple-vivid-100": "#DAC4FF",
          "purple-vivid-200": "#B990FF",
          "purple-vivid-300": "#A368FC",
          "purple-vivid-400": "#9446ED",
          "purple-vivid-500": "#8719E0",
          "purple-vivid-600": "#7A0ECC",
          "purple-vivid-700": "#690CB0",
          "purple-vivid-800": "#580A94",
          "purple-vivid-900": "#44056E",

          // magenta
          "magenta-050": "#F5E1F7",
          "magenta-100": "#ECBDF2",
          "magenta-200": "#CE80D9",
          "magenta-300": "#BB61C7",
          "magenta-400": "#AD4BB8",
          "magenta-500": "#A23DAD",
          "magenta-600": "#90279C",
          "magenta-700": "#7C1A87",
          "magenta-800": "#671270",
          "magenta-900": "#4E0754",

          // magenta vivid
          "magenta-vivid-050": "#FDEBFF",
          "magenta-vivid-100": "#F8C4FE",
          "magenta-vivid-200": "#F48FFF",
          "magenta-vivid-300": "#F368FC",
          "magenta-vivid-400": "#ED47ED",
          "magenta-vivid-500": "#E019D0",
          "magenta-vivid-600": "#CB10B8",
          "magenta-vivid-700": "#B30BA3",
          "magenta-vivid-800": "#960888",
          "magenta-vivid-900": "#6E0560",

          // pink
          "pink-050": "#FFE0F0",
          "pink-100": "#FAB8D9",
          "pink-200": "#F191C1",
          "pink-300": "#E668A7",
          "pink-400": "#DA4A91",
          "pink-500": "#C42D78",
          "pink-600": "#AD2167",
          "pink-700": "#9B1B5A",
          "pink-800": "#781244",
          "pink-900": "#5C0B33",

          // pink vivid
          "pink-vivid-050": "#FFE3EC",
          "pink-vivid-100": "#FFB8D2",
          "pink-vivid-200": "#FF8CBA",
          "pink-vivid-300": "#F364A2",
          "pink-vivid-400": "#E8368F",
          "pink-vivid-500": "#DA127D",
          "pink-vivid-600": "#BC0A6F",
          "pink-vivid-700": "#A30664",
          "pink-vivid-800": "#870557",
          "pink-vivid-900": "#620042",

          // blue grey
          "blue-grey-050": "#F0F4F8",
          "blue-grey-100": "#D9E2EC",
          "blue-grey-200": "#BCCCDC",
          "blue-grey-300": "#9FB3C8",
          "blue-grey-400": "#829AB1",
          "blue-grey-500": "#627D98",
          "blue-grey-600": "#486581",
          "blue-grey-700": "#334E68",
          "blue-grey-800": "#243B53",
          "blue-grey-900": "#102A43",
          "blue-grey-950": "#102A43",

          // cool grey
          "cool-grey-050": "#F5F7FA",
          "cool-grey-100": "#E4E7EB",
          "cool-grey-200": "#CBD2D9",
          "cool-grey-300": "#9AA5B1",
          "cool-grey-400": "#7B8794",
          "cool-grey-500": "#616E7C",
          "cool-grey-600": "#52606D",
          "cool-grey-700": "#3E4C59",
          "cool-grey-800": "#323F4B",
          "cool-grey-900": "#1F2933",

          // grey
          "grey-050": "#F7F7F7",
          "grey-100": "#E1E1E1",
          "grey-200": "#CFCFCF",
          "grey-300": "#B1B1B1",
          "grey-400": "#9E9E9E",
          "grey-500": "#7E7E7E",
          "grey-600": "#626262",
          "grey-700": "#515151",
          "grey-800": "#3B3B3B",
          "grey-900": "#222222",

          // warm grey
          "warm-grey-050": "#FAF9F7",
          "warm-grey-100": "#E8E6E1",
          "warm-grey-200": "#D3CEC4",
          "warm-grey-300": "#B8B2A7",
          "warm-grey-400": "#A39E93",
          "warm-grey-500": "#857F72",
          "warm-grey-600": "#625D52",
          "warm-grey-700": "#504A40",
          "warm-grey-800": "#423D33",
          "warm-grey-900": "#27241D",
        },
    },
  },
};

export default config;
