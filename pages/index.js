import Card from "../components/shared/Card";
import List from "../components/shared/List";
import Icon from "../components/shared/Icon";

const Home = () => {
  const iconConfiguration = {
    heightClass: "h-auto md:h-24",
    widthClass: "w-auto md:w-24",
  };

  return (
    <div>
      <div className="p-4 space-x-2 block md:flex">
        <Card className="p-8 flex-grow flex flex-col">
          <h1 className="text-center text-2xl">Acerca de mi</h1>
          <div className="rounded-full w-full h-full sm:w-64 sm:h-64 m-4 overflow-hidden mx-auto">
            <img src="/img/me.jpg" className="w-full h-full" />
          </div>
          <p className="text-center text-lg mt-auto">
            Miguel Angel Guerrero Salinas
          </p>
        </Card>
        <Card className="p-2 flex-grow shadow-none">
          <h1 className="text-center text-xl mb-4">Habilidades</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-4 lg:gap-10 overflow-visible">
            <Card>
              <h2 className="text-lg mb-2 text-center">Javascript</h2>
              <Icon
                className="mx-auto"
                sizeClass={iconConfiguration}
                imageUrl="img/library/javascript.png"
              />
              <List
                items={[
                  "Immutability vs mutability",
                  "Asynchronus Code",
                  "Data Structures",
                  "Algorithms",
                ]}
              />
            </Card>
            <Card>
              <h2 className="text-lg mb-2 text-center">Node</h2>
              <Icon
                className="mx-auto"
                sizeClass={iconConfiguration}
                imageUrl="img/library/node.png"
              />
              <List items={["Server vs Client", "Express", "Electron"]} />
            </Card>
            <Card>
              <h2 className="text-lg mb-2 text-center">React</h2>
              <Icon
                className="mx-auto"
                sizeClass={iconConfiguration}
                imageUrl="img/library/react.png"
              />
              <List items={["Redux", "React Router", "Next"]} />
            </Card>
            <Card>
              <h2 className="text-lg mb-2 text-center">Vue</h2>
              <Icon
                className="mx-auto"
                sizeClass={iconConfiguration}
                imageUrl="img/library/vue.png"
              />
              <List items={["Vuex", "Nuxt", "Tailwind"]} />
            </Card>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Home;
