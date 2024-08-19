let Rimg = ({ item ,index}) => {
  return (
    <>
      <div className="cardBox">
        <img
          src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
          alt=""
        />
        <div className="innerBox">
          <h3>{item.title}</h3>
          <span class="genre">Action, Adventure</span>
          {/* <p class="rating">⭐{item.vote_average}</p> */}
          <h1>{index+1}</h1>
        </div>
      </div>
    </>
  );
};
export default Rimg;