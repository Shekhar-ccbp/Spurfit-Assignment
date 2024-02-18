const LandingPage = () => (
  <div className="bg-white p-12 pt-4">
    <div className="w-full h-screen max-h-[1080px] rounded-3xl flex relative overflow-hidden">
      <img
        src="https://res.cloudinary.com/dzt6qmhmq/image/upload/v1708168173/leaf_u6puux.svg"
        className="absolute -top-4 left-16 h-16 -rotate-12"
        alt="leaf-img"
      />
      <img
        src="https://res.cloudinary.com/dzt6qmhmq/image/upload/v1708168265/Ripple_oww84b.svg"
        className="absolute -top-4 right-32 h-12"
        alt="ripple-img"
      />
      <img
        src="https://res.cloudinary.com/dzt6qmhmq/image/upload/v1708168265/Ripple_oww84b.svg"
        className="absolute -bottom-16 left-64 h-28"
        alt="ripple-img"
      />
      <img
        src="https://res.cloudinary.com/dzt6qmhmq/image/upload/v1708168265/Ripple_oww84b.svg"
        className="absolute top-36 left-1/2 h-12"
        alt="flower-img"
      />
      <div className="flex flex-col flex-1 justify-center p-12 ">
        <p className="text-lg">Ahead app</p>
        <div className="text-6xl font-bold">
          Master your Life <br />
          by mastering <br />
          emotions
        </div>
        <div className="flex gap-8 py-8 items-center">
          <img
            className="h-12 self-start cursor-pointer"
            src="https://res.cloudinary.com/dzt6qmhmq/image/upload/v1708140116/DownloadApp_rnvl1d.svg"
            alt="download-img"
          />
          <div className="text-sm">
            <div className="flex gap-1 pb-1">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="#FFD134"
                />
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="#FFD134"
                />
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="#FFD134"
                />
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="#FFD134"
                />
              </svg>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                  fill="#FFD134"
                />
              </svg>
            </div>
            100+ AppStore Reviews
          </div>
        </div>
      </div>
      <div className="flex-1 relative flex items-center justify-center">
        <img
          src="https://res.cloudinary.com/dzt6qmhmq/image/upload/v1708167917/Circle_yrwayl.png"
          alt="circle-img"
          className="z-10"
        />
        <div className="h-80 aspect-square rounded-full absolute self-center opacity-40 drop-shadow-xl"></div>
        <img
          src="https://res.cloudinary.com/dzt6qmhmq/image/upload/v1708168078/Phone_deygrf.png"
          alt="phone-img"
          srcset=""
          className="absolute self-center drop-shadow-md"
        />
      </div>
    </div>
  </div>
)

export default LandingPage
