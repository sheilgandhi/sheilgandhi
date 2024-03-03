import Back from "@/components/Back";
import ScreenPage from "@/components/ScreenPage";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

const ProjectsScreen: React.FC = () => {
  return (
    <div className="h-[calc(100vh-50px)]">
      <ScreenPage>
        <div className="col gap-16 p-4 md:p-16">
          <Back />
          <h1 className="text-3xl">P R O J E C T S</h1>
          <Projects />
        </div>
      </ScreenPage>
      <Footer />
    </div>
  );
};

export default ProjectsScreen;
