import "./ImagesPage.css"

const banners = [
  {
    title: "Poster 1",
    image: "/banners/Banner.png",
  },
  {
    title: "Poster 2",
    image: "/banners/Poster.png",
  },
];

function Banners() {
  return (
    <div className="images-page">
      {banners.map((banner) => (
        <div>
          <img src={banner.image} alt={banner.title} />;
        </div>
      ))}
    </div>
  )
}

export default Banners