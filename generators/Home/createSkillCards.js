import Card from "../../components/shared/Card";
import List from "../../components/shared/List";
import Icon from "../../components/shared/Icon";

export const iconConfiguration = {
  heightClass: "h-auto md:h-24",
  widthClass: "w-auto md:w-24",
};

export const createCard = ({ title, imageUrl, list }) => {
  return (
    <Card key={title}>
      <h2 className="text-lg mb-2 text-center">{title}</h2>
      <Icon
        className="mx-auto"
        sizeClass={iconConfiguration}
        imageUrl={imageUrl}
      />
      <List items={list} />
    </Card>
  );
};
