import BasicDetail from './BasicDetail';
import MainTabs from './MainTabs';

const Home = () => {
  return (
    <div className="h-auto w-full px-[8%] py-[2vh] flex flex-col gap-3">
      <BasicDetail />
      <MainTabs />
    </div>
  );
};

export default Home;
