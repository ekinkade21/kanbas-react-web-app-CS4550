import ModuleList from "./List";
function Modules() {
  return (
    <div className="flex-grow">
      <h2>Modules</h2>
      <div className="home-buttons">
        <button>Collapse All</button>
        <button>View Progress</button>
        <select>
          <option>Publish All</option>
          <option>Publish All Modules and Items</option>
          <option>Publish Modules Only</option>
          <option>Unpublish All</option>
        </select>
        <button className="add-module-button">+ Modules</button>
      </div>
      <ModuleList />
    </div>
  );
}
export default Modules;