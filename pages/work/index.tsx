import Back from "@/components/Back";
import ScreenPage from "@/components/ScreenPage";

const Work: React.FC = () => {
  return (
    <ScreenPage>
      <div className="flex flex-col gap-16 p-16">
        <Back />
        <h1 className="text-4xl">W O R K</h1>
      </div>
    </ScreenPage>
  );
};

export default Work;
