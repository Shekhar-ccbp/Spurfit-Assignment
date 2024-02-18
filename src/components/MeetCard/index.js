const MeetCard = () => (
  <div className="relative bg-white p-12 z-10">
    <img
      src="https://res.cloudinary.com/dzt6qmhmq/image/upload/v1708168405/Flower_x1hzwj.svg"
      alt="flower-img"
      className="absolute top-2 right-32 z-30"
    />
    <div className="bg-cream rounded-3xl p-12 relative overflow-hidden z-10">
      <div className="absolute h-96 bg-lightRed bottom-16 -left-32 aspect-square rounded-full -z-10"></div>
      <img
        src="https://res.cloudinary.com/dzt6qmhmq/image/upload/v1708168173/leaf_u6puux.svg"
        alt="leaf-img"
        className="absolute top-32 right-32"
      />
      <img
        src="https://res.cloudinary.com/dzt6qmhmq/image/upload/v1708168173/leaf_u6puux.svg"
        alt="leaf-img"
        className="absolute bottom-64 left-1/3"
      />
      <img
        src="https://res.cloudinary.com/dzt6qmhmq/image/upload/v1708168265/Ripple_oww84b.svg"
        alt="ripple-img"
        className="absolute bottom-48 left-1/3"
      />
      <div className="my-24 z-10">
        <div className="text-2xl px-8">
          <p>Built out of Frustation</p>
          <p className="text-6xl font-semibold pt-4">Meet the ahead app</p>
        </div>
        <div className="flex gap-8 py-16">
          <div className="flex-1  flex items-center justify-center">
            <div className="bg-white aspect-square rounded-full h-72 flex items-center justify-center border-[16px] border-gray-100 relative">
              <div className="absolute w-16 h-16 left-[calc(50%-2rem)] -top-8 flex items-center justify-center ">
                <p className="z-10 text-white">1</p>
                <img
                  src="https://res.cloudinary.com/dzt6qmhmq/image/upload/v1708168405/Flower_x1hzwj.svg"
                  alt="flower-img"
                  className="absolute h-full w-full top-0 left-0"
                />
              </div>
              <img
                src="https://res.cloudinary.com/dzt6qmhmq/image/upload/v1708259267/minighost_adlx1f.png"
                alt="angry-img"
                className="h-36"
              />
            </div>
          </div>
          <div className=" flex-1 text-3xl p-12 text-gray-500">
            A personalized pocket coach that provides bite-sized, science driven
            tools to boost emotional intelligence.
            <br />
            <br />
            Think of it as a pocket cheerleader towards a better, more
            fulfilling.
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default MeetCard
