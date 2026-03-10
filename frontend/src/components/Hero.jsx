import background from "../images/back.jpeg";

function Hero() {

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >

      <div className="hero-text">

        <h1>Say Yes To Your Vacation</h1>

        <p>Discover amazing travel experiences around the world</p>

        <button>Explore Experiences</button>

      </div>

    </section>
  );
}

export default Hero;