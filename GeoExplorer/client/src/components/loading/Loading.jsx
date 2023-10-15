import BlockSkeleton from "./BlockSkeleton";
import GmSkeleton from "./GmSkeleton";
import FlagSkeleton from "./FlagSkeleton";

const Loading = () => {
  return (
    <div id="loading-grid">
      <BlockSkeleton />
      <FlagSkeleton />
      <GmSkeleton />
    </div>
  );
};

export default Loading;