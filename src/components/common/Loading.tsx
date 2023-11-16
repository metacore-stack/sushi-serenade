// react-loading
import { default as ReactLoading } from 'react-loading';

const Loading = () => {
  return (
    <div className="flex items-center justify-center">
      <ReactLoading
        type="spokes"
        width={100}
        color={'#2d2d2d'}
        className="bg-no-repeat"
      />
    </div>
  );
};

export default Loading;
