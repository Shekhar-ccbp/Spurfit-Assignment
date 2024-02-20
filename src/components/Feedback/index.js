const Feedback = () => (
  <div className="bg-white p-32 flex items-center flex-col gap-4 text-2xl">
    We take privacy seriously
    <p className="text-4xl font-semibold">Before you get started</p>
    <p className="text-3xl text-center text-gray-500">
      We won`t share your answers with anyone (and won`t tell <br /> you which
      friend said what about you)
    </p>
    <div className="text- flex items-end py-2">with love, Team Ahead</div>
    <div className="bg-black rounded-full max-w-fit p-6 py-3 text-white text-sm cursor-pointer">
      Start a test
    </div>
    <p className="text-base text-gray-500">Take only 5 mins</p>
  </div>
)

export default Feedback
