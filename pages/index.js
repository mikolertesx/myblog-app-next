const Home = () => {
  return (
    <div>
      <div className="p-4 block md:flex">
        <div className="bg-green-800 p-2 flex-grow">
          <h1 className="text-center text-6xl">Acerca de mi</h1>
          <div>
            <img src="/img/me.jpg" />
          </div>
          <p>Miguel Angel Guerrero Salinas</p>
        </div>
        <div className="bg-blue-800 p-2 flex-grow">
          <h1>Habilidades</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 overflow-visible">
            <div>
              <h2>Javascript</h2>
              <p>Immutability vs mutability</p>
              <p>Asynchronus Code</p>
              <p>Data structures</p>
              <p>Algorithms</p>
            </div>
            <div>
              <h2>Node</h2>
              <p>Server vs Client</p>
              <p>Express</p>
              <p>Electron</p>
            </div>
            <div>
              <h2>React</h2>
              <p>React Native</p>
              <p>Redux</p>
              <p>React Router</p>
              <p>Next</p>
            </div>
            <div>
              <h2>Vue</h2>
              <p>Vuex</p>
              <p>Nuxt</p>
              <p>Tailwind</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
