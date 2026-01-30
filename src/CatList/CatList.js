import Cat from "../Cat/Cat";
import "./CatList.css";
const CatList = (props) => {
  console.log(props);
  return (
    <div className="container">
      {props.data.map((cat) => {
        return (
          <Cat
            name={cat.name}
            age={cat.age}
            color={cat.color}
            oweners={cat.owners}
            curiosity={cat.curiosity}
            imageUrl={cat.image}
          />
        );
      })}
    </div>
  );
};

export default CatList;
