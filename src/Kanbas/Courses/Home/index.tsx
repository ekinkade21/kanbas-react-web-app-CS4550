import Modules from "../Modules";
import Status from "./Status";
import "./index.css";

function Home() {
  return (
    <div className="d-flex">
      <div className="flex-fill">
        <Modules />
      </div>
      <div className="status-section">
        <Status />
      </div>
    </div>
  );
}
export default Home;