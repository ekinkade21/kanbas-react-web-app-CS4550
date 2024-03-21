import ModuleList from "./List";
import "./index.css";
function Modules() {
  return (
    <div className="flex-grow ">
      <h2>Modules</h2>
      <div className="home-buttons">
        <button className="btn btn-primary collapse-button">Collapse All</button>
        <button className="btn btn-primary collapse-button">View Progress</button>
        <select>
          <option>Publish All</option>
          <option>Publish All Modules and Items</option>
          <option>Publish Modules Only</option>
          <option>Unpublish All</option>
        </select>
      </div>
      <ModuleList />
    </div>
  );
}
export default Modules;