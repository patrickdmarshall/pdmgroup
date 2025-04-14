export default function AboutSection() {
  return (
    <section className="py-16 sm:py-20 md:py-32" id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">About PDM GROUP</h2>
            <p className="text-lg sm:text-xl mb-4 sm:mb-6 text-muted-foreground">
              PDM GROUP was founded by Patrick Marshall to merge cultural intuition with operational execution.
            </p>
            <p className="mb-4 sm:mb-6 text-sm sm:text-base">
              We operate at the intersection of creative culture and business strategy, bringing a founder-led approach
              to every project we undertake. We believe in balancing artistic vision with practical implementation,
              helping both creators and companies navigate the evolving digital landscape.
            </p>
            <p className="text-sm sm:text-base">
              With expertise spanning artist growth, e-commerce optimization, web/app development, and digital strategy,
              we provide comprehensive solutions that drive meaningful results for our clients and partners.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="grid-item">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">10+</h3>
              <p className="text-muted-foreground text-sm sm:text-base">Years Industry Experience</p>
            </div>
            <div className="grid-item">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">15+</h3>
              <p className="text-muted-foreground text-sm sm:text-base">Partners</p>
            </div>
            <div className="grid-item">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">25+</h3>
              <p className="text-muted-foreground text-sm sm:text-base">Tech Products Built</p>
            </div>
            <div className="grid-item">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">3</h3>
              <p className="text-muted-foreground text-sm sm:text-base">Founder-Led Ventures</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
