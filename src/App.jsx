import NewProject from "./component/NewProject";
import NoProjectSelected from "./component/NoProjectSelected";
import ProjectsSidebar from "./component/ProjectsSidebar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar />
      <NoProjectSelected />
    </main>
  );
}

export default App;
