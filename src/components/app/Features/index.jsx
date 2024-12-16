const BentoCard = ({ src, title, descripton }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        autoPlay
        muted
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {descripton && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{descripton}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto md:px-10 px-3">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Into the Metagame Layer
          </p>
          <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
            Immerse yourself in a rich and ever-expanding universe where a
            vibrant array of products converge into an interconnected overlay
            experience on your world.
          </p>
        </div>

        <div className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                radi<b>n</b>t
              </>
            }
            descripton="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
          />
        </div>


        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
            <div className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
                <BentoCard
                src="videos/feature-2.mp4"
                title={<>zig<b>m</b>a</>}
                description="An anime and gaming-inspired NFT collection - the IP primed for expansion." 
                />
            </div>

            <div className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
                <BentoCard
                src="videos/feature-3.mp4"
                title={<>n<b>e</b>xus</>}
                description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities." 
                />
            </div>

            <div className="bento-tilt_1 row-span-1 me-14 md:col-span-1 md:me-0">
                <BentoCard
                src="videos/feature-4.mp4"
                title={<>az<b>u</b>l</>}
                description="A cross-world AI Agent - elevating your gameplay to be more fun and productive." 
                />
            </div>

        </div>
      </div>
    </section>
  );
};

export default Features;
