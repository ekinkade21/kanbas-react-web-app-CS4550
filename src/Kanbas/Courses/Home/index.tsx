import Modules from "../Modules";
import Status from "./Status";

function Home() {
  return (
    <div className="d-flex">
      <div className="flex-fill">
        <Modules />
      </div>
      <div>
        <Status />
      </div>
    </div>
  );
}
export default Home;
