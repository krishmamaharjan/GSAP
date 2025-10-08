const Hero = () => {
  return (
    <div>
        <section className="bg-black">
            <div className="hero-container">
                {/* <img src="/images/hero-img.png" alt="hero-image"  */}
                <img src="/images/static-img.png" alt="static-image" 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 object-auto scale-100 md:scale-150" 
                />

                <div className="hero-content">
                  <div className="overflow-hidden">
                    <h1 className="hero-title">Freaking Delicious</h1>
                  </div>

                  {/* Reveal Animation */}
                  <div
                    style={{
                      clipPath: "polygon(48% 0, 48% 0, 48% 100%, 48% 100%)"
                    }}
                      className="hero-text-scroll">
                      <div className="hero-subtitle">
                        <h1>Protein + Caffeine</h1>
                      </div>
                  </div>

                  <h2>
                    Live Life to the fullest with SPYLT: Shatter boredom and embrace you inner kid with every deliciously smooth chug.
                  </h2>

                  <div className="hero-button">
                    <p>Chug a SPYLT</p>
                  </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero