import { useSelector } from "react-redux";
import BlockSkeleton from "./BlockSkeleton";
import GmSkeleton from "./GmSkeleton";
import FlagSkeleton from "./FlagSkeleton";

const Loading = () => {
  const loading = useSelector(state => state.country.isLoading);

  
  return (
    loading &&
      <div id="loading-grid">
        <BlockSkeleton />
        <FlagSkeleton />
        <GmSkeleton />
      </div>
    

  );
};

export default Loading;