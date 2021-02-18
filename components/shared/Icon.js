const Icon = ({
  imageUrl,
  children,
  sizeClass = {
    heightClass: "h-auto sm:h-32 md:h-16",
    widthClass: "w-auto sm:w-32 md:w-16",
  },
  className,
}) => {
  let itemToShow = children;
  const { heightClass, widthClass } = sizeClass || {};

  if (imageUrl) {
    itemToShow = <img className="mx-auto" src={imageUrl} />;
  }

  const classNameString = `${className || ""} ${heightClass} ${widthClass}`;

  if (!itemToShow) {
    console.warn("Icon wasn't provided with any item to show.");
    return <div className={`${classNameString} bg-gray-800`}></div>;
  }

  return <div className={classNameString}>{itemToShow}</div>;
};

export default Icon;
