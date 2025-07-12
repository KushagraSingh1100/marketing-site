import "./ImagesPage.css";

const posts = [
  {
    title: "Post 1",
    image: "/works/Post.png",
  },
  {
    title: "Post 2",
    image: "/works/Post (2).png",
  },
];

function Posts() {
  return (
    <div className="images-page">
      {posts.map((post) => (
        <div>
          <img src={post.image} alt={post.title} />;
        </div>
      ))}
    </div>
  );
}

export default Posts;
