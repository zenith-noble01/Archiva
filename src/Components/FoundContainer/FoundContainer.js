import "./FoundContainer.scss";

const FoundContainer = ({ found }) => {
  return (
    <div className="outlet__found">
      <div className="found__header">
        <div className="found__title">
          <h2>Found {found.length} results</h2>
        </div>
      </div>
      <div className="found__body">
        {found.map((item, index) => {
          return (
            <div className="found__item" key={index}>
              <div className="found__item__title">
                <h3>{item.title}</h3>
              </div>
              <div className="found__item__content">
                <p>{item.content}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FoundContainer;
