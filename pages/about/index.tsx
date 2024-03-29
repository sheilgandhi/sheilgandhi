import Back from "@/components/Back";
import Footer from "@/components/Footer";
import ScreenPage from "@/components/ScreenPage";
import Image from "next/image";

const about = [
  {
    title: "Sheil Gandhi: A Tech Maverick Making Waves",
    paragraph:
      "In the bustling world of technology, one name stands out for its blend of innovation, dedication, and versatility: Sheil Gandhi. Armed with a First Class Degree in Software Engineering from Victoria University and a passion for frontend development, Sheil is making waves in the industry, one project at a time.",
  },
  {
    title: "A Journey of Excellence",
    paragraph:
      "Sheil's journey began at Scots College in Wellington, New Zealand, where his academic prowess was evident from the start. Fast forward to today, and his portfolio speaks volumes. From enhancing client relationships with industry giants like Papa John's and BurgerFuel to deploying over 20 apps on the Apple App Store and Google Play Store, Sheil's track record is nothing short of impressive.",
  },
  {
    title: "Pushing Boundaries",
    paragraph:
      "But Sheil's ambitions extend beyond conventional boundaries. His BE(Hons) project, \"Decentralised Application For Object Recognition, Storage, and Tracking,\" showcases his vision for a future where communities have control over their digital assets. Utilizing cutting-edge technologies like React Native, IPFS, and Google ARCore, Sheil's project is not just groundbreaking; it's a glimpse into the future of technology.",
  },
  {
    title: "A Passion for Progress",
    paragraph:
      "However, Sheil's journey isn't just about technical prowess. As Vice-Captain of the North City Cricket Club, he brings the same level of dedication and strategic thinking to the cricket field, leading by example and fostering team culture.",
  },
  {
    title: "Looking Ahead",
    paragraph:
      "As Sheil prepares to relocate to London in April, his sights are set on new horizons. With a keen interest in frontend-cybersecurity synergy and a drive to become a Chief Technology Officer, Sheil is poised to make an even greater impact on the global tech scene.",
  },
  {
    title: "Join the Journey",
    paragraph:
      "Whether it's crafting cutting-edge software solutions or leading from the front on the cricket field, Sheil Gandhi is a force to be reckoned with. Follow his journey on his website and social media channels, and join him as he continues to push the boundaries of what's possible in the world of technology.",
  },
];

const AboutScreen = () => {
  return (
    <div className=" h-[calc(100vh-50px)]">
      <ScreenPage>
        <div className="col gap-16 p-4 md:p-16">
          <Back />
          <h1 className="text-4xl">A B O U T</h1>
          <div className="col gap-4 items-start md:justify-between md:flex-row">
            <Image
              src="/images/Sheil.jpg"
              alt="Image of Sheil Gandhi"
              width={500}
              height={500}
              className="drop-shadow-white cursor-crosshair"
            />
            <div className="col gap-4">
              {about.map(({ title, paragraph }) => (
                <div key={title} className="text-left">
                  <h2 className="font-black text-2xl">{title}</h2>
                  <p className="max-w-[74ch]">{paragraph}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ScreenPage>
      <Footer />
    </div>
  );
};

export default AboutScreen;
