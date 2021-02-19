import Card from "../components/shared/Card";
import skills from "../constants/skills";
import { createCard } from "../generators/Home/createSkillCards";

const Home = () => {
  return (
    <div>
      <div className="p-4 space-x-2 block md:flex">
        <Card className="p-8 flex-grow flex flex-col">
          <h1 className="text-center text-2xl">Acerca de mi</h1>
          <div className="rounded-full w-full h-full sm:w-64 sm:h-64 m-4 overflow-hidden mx-auto">
            <img src="/img/me.jpg" className="w-full h-full" />
          </div>
          {/* TODO Add the usual "I'm a developer animation" */}
          <h2 className="text-center text-lg">FullStack developer</h2>
          <p className="text-center text-lg mt-auto">
            Miguel Angel Guerrero Salinas
          </p>
        </Card>
        <Card className="p-2 flex-grow shadow-none">
          <h1 className="text-center text-xl mb-4">Habilidades</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-4 lg:gap-10 overflow-visible">
            {skills.map((skill) => createCard({ ...skill }))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Home;
