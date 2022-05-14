import TopBanner from "../components/organisms/TopBanner";
import Featured from "../components/organisms/Featured";
import Recommended from "../components/organisms/Recommended";

const Main = ({ snaps }) => {
  return (
    <>
      <TopBanner />
      <Featured />
      <Recommended snaps={snaps}/>
    </>
  );
};

export default Main;
