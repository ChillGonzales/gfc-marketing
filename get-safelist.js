export default function getSafelist() {
  const prefixes = ['bg', 'text', 'ring', 'from', 'to'];
  const borders = ['border', 'border-b'];
  const colors = ['main', 'blue-grey'];
  const shades = ['050', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'];

  const safelist = [];

  prefixes.forEach((prefix) => {
    colors.forEach((color) => {
      shades.forEach((shade) => {
        safelist.push(`${prefix}-${color}-${shade}`);
      });
    });
  });
  borders.forEach((border) => {
    colors.forEach((color) => {
      safelist.push(`${border}-${color}`);
    });
  });

  console.log(safelist);
  return safelist;
}
