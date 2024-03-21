import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addModule, deleteModule, updateModule, setModule } from "./reducer";
import { KanbasState } from "../../store";
import "./index.css";
function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector(
    (state: KanbasState) => state.modulesReducer.modules
  );
  const module = useSelector(
    (state: KanbasState) => state.modulesReducer.module
  );
  const dispatch = useDispatch();
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <input
          className="input-module-title"
          value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }
        />
        <textarea
          className="text-area-module-description"
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }
        />
        <button
          className="btn btn-primary edit-button"
          onClick={() => dispatch(updateModule(module))}
        >
          Update
        </button>
        <button
          className="btn btn-primary go-button"
          onClick={() => dispatch(addModule({ ...module, course: courseId }))}
        >
          Add Module
        </button>
      </li>
      {moduleList
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item">
            <h3>{module.name}</h3>
            <p>{module.description}</p>
            <button className="btn btn-primary edit-button" onClick={() => dispatch(setModule(module))}>Edit</button>
            <button className="btn btn-primary delete-button" onClick={() => dispatch(deleteModule(module._id))}>Delete</button>
          </li>
        ))}
    </ul>
  );
}
export default ModuleList;
