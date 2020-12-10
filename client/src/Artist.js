import { useStateValue } from "./StateProvider";

function Product({ artist }) {
  const [{ basket }, dispatch] = useStateValue();

  console.log("this is the basket", basket);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        artist: artist,
      },
    });
  };

  return (
    <div className="App">
      {this.state.topArtist.map((artist) => {
        return (
          <h2 key={artist.name}>
            {artist.name} - {artist.playcount}
            <button onClick={addToBasket}>LIKE</button>
          </h2>
        );
      })}
    </div>
  );
}

export default Product;
