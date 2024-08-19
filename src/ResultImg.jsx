let ResultImg = ({ item, index }) => {
    console.log(item)
  return (
    <>
      <div className="cardBox">
        <img
          src={`${item.Poster}`}
          alt=""
        />
        <div className="innerBox">
          <h3>{item.Title}</h3>
          {/* <span class="genre">Action, Adventure</span> */}
          {/* <p class="rating">⭐{item.vote_average}</p> */}
          <h1>{index + 1}</h1>
        </div>
      </div>
    </>
  );
};
export default ResultImg