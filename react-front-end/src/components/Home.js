// import image from "../images/onward-logo.jpg"
import image from "../images/web-design.jpg"

const Home = () => {
  return (
    <main className="relative">
      <img
        src={image}
        alt="onwards is the way to go"
        className="absolute object-cover w-full h-full object-cover"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1
          className="text-6xl text-green-100 font-bold cursive leading-none lg:leading-snug"
          style={{ fontSize: "150px" }}
        >
          Onwards is the only way to go!
        </h1>
      </section>
    </main>
  )
}

export default Home
