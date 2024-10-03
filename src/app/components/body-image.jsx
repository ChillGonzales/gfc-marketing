export default function BodyImage({ src, alt, className }) {
  const classes = `rounded-md drop-shadow-lg h-auto w-full lg:w-fit max-w-screen-sm lg:h-96 ${className}`;
  return (
    <>
      <img
        src={src}
        alt={alt || "An image of a landscape"}
        className={`block lg:hidden ${classes}`}
      />
      <img
        src={`${src}`} // todo: add lg_ prefix here
        alt={alt || "An image of a landscape"}
        className={`hidden lg:block xl:hidden ${classes}`}
      />
      <img
        src={`${src}`} // todo: add xl_ prefix here
        alt={alt || "An image of a landscape"}
        className={`hidden xl:block ${classes}`}
      />
    </>
  );
}
