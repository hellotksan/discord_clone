import "./ChatHeader.css";

type Props = {
  channelName: string | null;
};

const ChatHeader = (props: Props) => {
  const { channelName } = props;
  return (
    <div className="chatHeader">
      <div className="chatHeaderLeft">
        <h3>
          <span className="chatHeaderHash">#</span>
          {channelName}
        </h3>
      </div>
    </div>
  );
};

export default ChatHeader;
