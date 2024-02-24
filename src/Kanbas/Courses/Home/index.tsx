import Modules from "../Modules";
import Status from "./Status";

function Home() {
  return (
    <>
      <div className="flex-fill">
        <Modules />
      </div>
      <div>
        <Status />
      </div>
    </>
  );
}
export default Home;
