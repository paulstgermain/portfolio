export default function Projects() {
  return (
    <main className="flex-1 flex flex-col">
      <div className="flex flex-row h-full">
        <div className="flex-1 border-blue-500 border-2 ml-14">
          {/* Projects images go here */}
        </div>
        <div className="flex-3 border-projectsnav border-2 mr-100">
          {/* Projects content goes here, shown to user when they click on a project image */}
        </div>
      </div>
    </main>
  );
}