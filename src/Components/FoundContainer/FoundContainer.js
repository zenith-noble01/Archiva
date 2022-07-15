import "./FoundContainer.scss";

const FoundContainer = ({ found }) => {
  return (
    <div className="outlet__found">
      <div className="found__header">
        <div className="found__title">
          <h2> {found.length} Most search Drugs</h2>
        </div>
      </div>
      <div className="found__body">
        {found.map((item, index) => {
          return (
            <div className="found__item" key={index}>
              <div className="found__item__title">
                <img src={item.img} alt="" />
                <h3>{item.drug}</h3>
              </div>
              <div className="found__item__content">
                <p>{item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FoundContainer;
