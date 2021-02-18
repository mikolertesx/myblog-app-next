// Using the index is okay here as the lists are supposed to be static.
const List = ({ items }) => {
  return (
    <ul className="list-disc space-y-2">
      {items.map((item, index) => (
        <li className="ml-2" key={index}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default List;
