import Back from "@/components/Back";
import ScreenPage from "@/components/ScreenPage";
import Projects from "@/components/Projects";

const ProjectsScreen: React.FC = () => {
  return (
    <ScreenPage>
      <div className="col gap-16 p-4 h-screen md:p-16">
        <Back />
        <h1 className="text-3xl">P R O J E C T S</h1>
        <Projects />
      </div>
    </ScreenPage>
  );
};

export default ProjectsScreen;
