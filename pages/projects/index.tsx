import Back from "@/components/Back";
import ScreenPage from "@/components/ScreenPage";

const Projects: React.FC = () => {
  return (
    <ScreenPage>
      <div className="flex flex-col gap-16 p-16">
        <Back />
        <h1 className="text-3xl">P R O J E C T S</h1>
      </div>
    </ScreenPage>
  );
};

export default Projects;
