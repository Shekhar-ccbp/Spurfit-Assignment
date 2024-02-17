const Header = () => {
  return (
    <div className="flex justify-between items-center px-16 py-4 sticky top-0 bg-white z-50  ">
      <div className="h-16 w-16">
        <img
          src="https://res.cloudinary.com/dzt6qmhmq/image/upload/v1708137499/icon_sdx4ip.jpg"
          alt="app-icon"
        />
      </div>
      <div className="flex gap-6">
        <a href="#emotions">
          <button
            type="button"
            className="hover:text-primary p-3 py-1 text-base"
          >
            Emotions
          </button>
        </a>
        <a href="#manifesto">
          <button
            type="button"
            className="hover:text-primary p-3 py-1 text-base"
          >
            Manifesto
          </button>
        </a>
        <a href="#self-awareness">
          <button
            type="button"
            className="hover:text-primary p-3 py-1 text-base"
          >
            Self-awareness test
          </button>
        </a>
        <a href="#work-with-us">
          <button
            type="button"
            className="hover:text-primary p-3 py-1 text-base"
          >
            Work With Us
          </button>
        </a>
      </div>
      <button
        type="button"
        className="text-white bg-black rounded-full max-w-fit p-6 py-3 text-sm"
      >
        Download app
      </button>
    </div>
  )
}

export default Header
