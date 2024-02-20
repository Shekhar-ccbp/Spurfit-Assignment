import {motion} from 'framer-motion'

const quotes = [
  {
    emoji: '😔',
    title: 'You hold a grudge against a colleague',
    description:
      'You harbor negative feelings and resentment towards a colleague, which hinders collaboration and can lead to a toxic work environment.',
    class: 'bg-blue',
  },
  {
    emoji: '😠',
    title: 'You argue with a colleague',
    description:
      'You get angry and defensive, instead of staying open and working towards common ground.',
    class: 'bg-purple',
  },
  {
    emoji: '😯',
    title: 'You get a promotion at work',
    description:
      'You Question yourself and wonder when they`ll realise you are an unqualified imposter, instead of trusting yourself and your abilities',
    class: 'bg-primary -rotate-6 text-black',
  },
  {
    emoji: '🤨',
    title: 'You attend a class reunion',
    description:
      'You compare yourself with your peers` achievement, instead of making your self-judgement more independent of others',
    class: 'bg-lightRed',
  },
  {
    emoji: '😒',
    title: 'You are at lively dinner party',
    description:
      'You play on your phone, instead of confidently approaching strangers and striking up a chat',
    class: 'bg-cream',
  },
  {
    emoji: '😬',
    title: 'You hit dead end in a negotiation',
    description:
      'You get nervous, frazzled and frustrated, instead of staying optimistic and solution oriented',
    class: 'bg-blue',
  },
]

const Quotes = () => (
  <div className=" py-12">
    <div className="relative w-fit">
      <motion.p
        variants={{
          onScreen: {opacity: 1, scale: 1, transformOrigin: 'left'},
          offScreen: {opacity: 0, scale: 0},
        }}
        initial="offScreen"
        whileInView="onScreen"
        viewport={{once: true}}
        transition={{duration: 1.25, type: 'spring'}}
        className="text-6xl font-semibold px-16 pb-16"
      >
        Does this sound familiar...
      </motion.p>
      <img
        src="https://res.cloudinary.com/dzt6qmhmq/image/upload/v1708256504/redGhost_xouq2m.svg"
        alt="angry-icon"
        className="absolute top-0 -right-4 -rotate-6 h-16"
      />
    </div>
    <motion.div
      variants={{
        onScreen: {opacity: 1, scale: 1, transformOrigin: 'right'},
        offScreen: {opacity: 0, scale: 0},
      }}
      initial="offScreen"
      whileInView="onScreen"
      viewport={{once: true}}
      transition={{duration: 0.75, type: 'spring'}}
      className="relative flex items-center overflow-auto px-16 gap-12 py-12"
    >
      {quotes.map(quote => (
        <div
          className={
            ' min-w-[410px] max-h-fit max-w-min rounded-xl p-12 ' + quote.class
          }
        >
          <p className="text-3xl p-0">{quote.emoji}</p>
          <p className="font-medium text-lg py-2">{quote.title}</p>
          <p className="opacity-80">{quote.description}</p>
        </div>
      ))}
    </motion.div>
  </div>
)

export default Quotes
