import "./ImagesPage.css"

const pamphlets = [
  {
    title: "Poster 1",
    image: "/pamphlets/Post (3).png",
  },
  {
    title: "Poster 2",
    image: "/pamphlets/Post (4).png",
  },
];

function Pamphlets() {
  return (
    <div className="images-page">
      {pamphlets.map((pamphlet) => (
        <div>
          <img src={pamphlet.image} alt={pamphlet.title} />;
        </div>
      ))}
    </div>
  )
}

export default Pamphlets