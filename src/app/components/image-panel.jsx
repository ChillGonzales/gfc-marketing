export default function ImagePanel({ pathToImage, title, href }) {
  return (
    <a
      href={href}
      className="relative isolate w-full min-w-[325px] lg:min-w-[400px] h-56 lg:h-64 flex flex-col items-center justify-center content-center hover:brightness-110"
    >
      <img
        src={pathToImage}
        alt=""
        className="absolute inset-0 h-56 lg:h-64 w-full object-cover rounded-md drop-shadow-lg -z-10"
      />
      <div className="absolute h-56 lg:h-64 w-full inset-0 bg-main-grey-900 object-cover mix-blend-multiply opacity-45 -z-10"></div>
      <div className="px-6 text-center text-white right-0 main-grey font-serif text-3xl lg:text-4xl drop-shadow-4xl">
        {title}
      </div>
    </a>
  );
}
