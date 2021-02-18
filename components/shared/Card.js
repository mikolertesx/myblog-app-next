export const Card = ({ className, children }) => {
  const fixedClass = `p-8 shadow-none md:shadow-xl border ${className}`;
  return <div className={fixedClass}>{children}</div>;
};

export default Card;
