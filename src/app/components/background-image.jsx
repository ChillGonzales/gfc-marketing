"use client";

import { useTheme } from "@/app/contexts/theme-provider";

export default function BackgroundImage({
  children,
  bgImgPosition,
  pathToImage,
}) {
  const {theme} = useTheme();
  const parentClasses = `relative bg-cover ${bgImgPosition} isolate overflow-hidden h-[700px] lg:h-[650px] 2xl:h-[800px] flex flex-col lg:flex-none justify-center items-center`;
  const childClasses = `absolute inset-0 h-[700px] bg-${theme.mainGrey900} lg:h-[650px] 2xl:h-[900px] w-auto lg:w-full object-cover mix-blend-multiply mx-auto opacity-50`;
  const fileName = pathToImage.split("/").slice(-1)[0];
  return (
    <>
      {/*This hidden image is to force nextjs to preload the image in the html header*/}
      <img className={"hidden"} src={pathToImage}></img>
        <div
          className={`flex ${parentClasses}`}
          style={{ backgroundImage: `url(${pathToImage})` }}
        >
          <div className={childClasses}></div>
          {children}
        </div>

      {/* TODO: Refactor this pattern. This is currently rendering 3 duplicate <h1> tags which will screw up SEO*/}
      {/*<div*/}
      {/*  className={`flex lg:hidden ${parentClasses}`}*/}
      {/*  style={{ backgroundImage: `url(${pathToImage})` }}*/}
      {/*>*/}
      {/*  <div className={childClasses}></div>*/}
      {/*  {children}*/}
      {/*</div>*/}

    {/*  <div*/}
    {/*    className={`hidden lg:flex xl:hidden ${parentClasses}`}*/}
    {/*    style={{*/}
    {/*      backgroundImage: `url(${pathToImage.replace(fileName, `${fileName}`)})`, // todo: add lg_ prefix here*/}
    {/*    }}*/}
    {/*  >*/}
    {/*    <div className={childClasses}></div>*/}
    {/*    {children}*/}
    {/*  </div>*/}

    {/*  <div*/}
    {/*    className={`hidden xl:flex ${parentClasses}`}*/}
    {/*    style={{*/}
    {/*      backgroundImage: `url(${pathToImage.replace(fileName, `${fileName}`)})`, // todo: add xl_prefix here*/}
    {/*    }}*/}
    {/*  >*/}
    {/*    <div className={childClasses}></div>*/}
    {/*    {children}*/}
    {/*  </div>*/}
    </>
  );
}
