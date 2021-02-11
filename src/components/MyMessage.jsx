const MyMessage = ({ message }) => {
  if (message?.attachments?.length > 0) {
    return (
      <img
        src={message.attachments[0].file}
        alt="Message attachment"
        className="message-image"
        style={{ float: "right", margin: "4px 0" }}
      />
    );
  }
  return (
    <div
      className="message"
      style={{
        float: "right",
        margin: "4px 0",
        marginRight: "18px",
        color: "white",
        backgroundColor: "#3b2a50",
      }}
    >
      {message.text}
    </div>
  );
};

export default MyMessage;
