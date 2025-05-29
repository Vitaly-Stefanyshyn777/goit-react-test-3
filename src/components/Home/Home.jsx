import { useStore } from "../../zustand/zustandStore";

function Home() {
  const { bears, increasePopulation } = useStore();
  return (
    <div>
      Home {bears} <button onClick={increasePopulation}>+</button>
    </div>
  );
}

export default Home;
