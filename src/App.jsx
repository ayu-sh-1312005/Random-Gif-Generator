import Random from "./components/Random"
import Tag from "./components/Tag";

export default function App() {
  return (

    <div className="flex flex-col items-center background min-h-screen h-fit gap-3 p-5">
      <h1 className="bg-white text-black w-[95%] p-1 text-3xl font-bold rounded-lg text-center">RANDOM GIFS</h1>
      <div className="flex flex-col h-full w-full items-center gap-3">
        <Random />
        <Tag />
      </div>
    </div>

  );
}
