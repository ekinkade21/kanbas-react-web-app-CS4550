import './index.css'
function Status() {
  return (
    <>
      <h2>Course Status</h2>
      <br />
      <button className="btn btn-secondary publish-buttons">Unpublish</button>
      <button className="btn btn-success">Published</button>
      <br />
      <br />
      <button className="btn btn-secondary">Import Existing Content</button>
      <br />
      <br />
      <button className="btn btn-secondary">Import From Commons</button>
      <br />
      <br />
      <button className="btn btn-secondary">Choose Home Page</button>
      <br />
      <br />
    </>
  );
}
export default Status;
