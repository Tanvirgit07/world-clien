const Home = () => {
  return (
    <div>
      <div className="carousel h-[90vh] mt-8 mb-8 w-full">
        <div id="slide1" className="carousel-item relative w-full">
          {/* <img
            src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
            className="w-full rounded-xl"
          /> */}

          <div
            className="hero h-[90vh] rounded-xl"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/kXnFpqw/Islands.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-2xl">
                <h1 className="mb-5 text-5xl font-bold">Island</h1>
                <p className="mb-5">
                Islands are landmasses surrounded by water. They vary in size from tiny islets to expansive land masses like Greenland. Islands can be formed through volcanic activity, coral reefs, or as a result of shifting tectonic plates.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          {/* <img
            src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
            className="w-full rounded-xl"
          /> */}

<div
            className="hero h-[90vh] rounded-xl"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/DY7YS2y/bankok.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-2xl">
                <h1 className="mb-5 text-5xl font-bold">Bangkok</h1>
                <p className="mb-5">
                Bangkok, the capital of Thailand, is a vibrant and bustling city known for its rich cultural heritage, ornate temples, and lively street life. It's often referred to as the "City of Angels" in Thai. Bangkok is famous for its delicious street food, floating markets, and vibrant nightlife scene. 
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>

          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          {/* <img
            src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
            className="w-full rounded-xl"
          /> */}

<div
            className="hero h-[90vh] rounded-xl"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/MMtwqSM/kuala-lumpur.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-2xl">
                <h1 className="mb-5 text-5xl font-bold">kuala-lumpur</h1>
                <p className="mb-5">
                Kuala Lumpur, the capital of Malaysia, is a dynamic metropolis known for its iconic skyline dominated by the Petronas Twin Towers. The city is a melting pot of cultures, with influences from Malay, Chinese, Indian, and indigenous communities. Kuala Lumpur is a hub for shopping, dining, and entertainment, with bustling street markets and upscale malls
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>


          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          {/* <img
            src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            className="w-full rounded-xl"
          /> */}

<div
            className="hero h-[90vh] rounded-xl"
            style={{
              backgroundImage:
                "url(https://i.ibb.co/FVy6fxr/sundarbon.jpg)",
            }}
          >
            <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-2xl">
                <h1 className="mb-5 text-5xl font-bold">Sundarban</h1>
                <p className="mb-5">
                The Sundarbans is a vast mangrove forest located in the delta region of the Bay of Bengal,straddling India's West Bengal and Bangladesh. It's the largest mangrove forest in the world and a UNESCO World Heritage Site. 
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>


          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
