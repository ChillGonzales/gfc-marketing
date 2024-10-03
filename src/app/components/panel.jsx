export default function Panel({ backgroundClass, children }) {
  return (
    <div className={`py-8 lg:py-16 px-6 lg:px-8 ${backgroundClass}`}>
      <div className={"max-w-screen-2xl lg:mx-auto"}>{children}</div>
    </div>
  );
}
