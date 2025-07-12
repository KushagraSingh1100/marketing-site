import "./ImagesPage.css"

const posters = [
  {
    title: "Poster 1",
    image: "/posters/Poster (2).png",
  },
  {
    title: "Poster 2",
    image: "/posters/Poster (3).png",
  },
];


function Posters() {
  return (
    <div className="images-page">
      {posters.map((poster) => (
        <div>
          <img src={poster.image} alt={poster.title} />;
        </div>
      ))}
    </div>
  )
}

export default Posters