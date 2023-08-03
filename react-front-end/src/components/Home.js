import image from "../images/web-ux-ui.jpg"

const Home = () => {
  return (
    <main className="relative">
      <img
        src={image}
        alt="onwards is the way to go"
        className="absolute object-cover w-full h-full object-cover"
      />
      <section className="relative flex justify-center min-h-screen  pt-3 px-3">
        <h1
          className="text-6xl text-blue-500 font-bold cursive leading-none lg:leading-snug text-center"
          style={{
            fontSize: "150px",
            textShadow: "4px 2px 4px #000000",
            paddingTop: "160px",
          }}
        >
          "Onwards together!"
        </h1>
      </section>
    </main>
  )
}

export default Home
