export default AccordianItem = ({ title, id, body, isOpen, setIsopen }) => {
  const handelClick = () => {
    id === isOpen ? setIsopen(null) : setIsopen(id);
  };
  return (
    <div
      style={{
        border: "1px solid black",
        margin: "5px 0",

        textAlign: "left",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          border: "1px solid #ddd",
          background: "grey",
        }}
        onClick={handelClick}
      >
        {title}
        <div> ⬇️</div>
      </div>
      {isOpen === id && (
        <div style={{ padding: "10px", height: "100px" }}>{body}</div>
      )}
    </div>
  );
};
