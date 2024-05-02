import BasicDetail from './BasicDetail';
import MainTabs from './MainTabs';

const Home = () => {
  return (
    <div className="flex h-auto w-full flex-col gap-3 px-[8%] py-[2vh]">
      <BasicDetail />
      <MainTabs />
    </div>
  );
};

export default Home;
