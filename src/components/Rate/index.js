import {motion} from 'framer-motion'

const Rate = () => (
  <div className="bg-white p-12">
    <div className="p-16 bg-lightBlue rounded-2xl flex flex-col items-center text-2xl gap-12 py-24">
      <div className="text-center">
        Let your friends, family, and co-workers (anonymously) rate your social
        skills.
        <p className="text-6xl font-semibold pt-4">
          Ever wondered what others think of you?
        </p>
      </div>
      <div className="w-full px-16 pt-4 flex justify-between text-base py-8">
        <div className="flex-1 text-center px-4 relative pt-8">
          <div className="border-t-4 left-1/2 -top-1 w-1/2 border-dashed border-Brown absolute"></div>
          <div className=" w-12 h-12 left-[calc(50%-1.5rem)] -top-6 absolute flex items-center justify-center ">
            <p className="z-10 text-white">1</p>
            <img
              src="https://res.cloudinary.com/dzt6qmhmq/image/upload/v1708168405/Flower_x1hzwj.svg"
              alt="flower-img"
              className="h-full w-full absolute top-0 left-0"
            />
          </div>
          <motion.p
            variants={{
              onScreen: {opacity: 1, scale: 1, transformOrigin: 'top'},
              offScreen: {opacity: 0, scale: 0},
            }}
            initial="offScreen"
            whileInView="onScreen"
            viewport={{once: true}}
            transition={{duration: 1.5, type: 'spring'}}
          >
            Answer questions on your social skills
          </motion.p>
        </div>
        <div className="flex-1 text-center px-4 relative pt-8">
          <div className="border-t-4 left-0 -top-1 w-full border-dashed border-Brown absolute"></div>
          <div className=" w-12 h-12 left-[calc(50%-1.5rem)] -top-6 absolute flex items-center justify-center">
            <p className="z-10 text-white">2</p>
            <img
              src="https://res.cloudinary.com/dzt6qmhmq/image/upload/v1708168405/Flower_x1hzwj.svg"
              alt="flower-img"
              className="h-full w-full absolute top-0 left-0"
            />
          </div>
          <motion.p
            variants={{
              onScreen: {opacity: 1, scale: 1, transformOrigin: 'top'},
              offScreen: {opacity: 0, scale: 0},
            }}
            initial="offScreen"
            whileInView="onScreen"
            viewport={{once: true}}
            transition={{duration: 1.5, type: 'spring'}}
          >
            Let others anonymously answer the same questions about you
          </motion.p>
        </div>
        <div className="flex-1 text-center px-4 relative pt-8">
          <div className="border-t-4 right-1/2 -top-1 w-1/2 border-dashed border-Brown absolute"></div>
          <div className=" w-12 h-12 left-[calc(50%-1.5rem)] -top-6 absolute flex items-center justify-center">
            <p className="z-10 text-white">3</p>
            <img
              src="https://res.cloudinary.com/dzt6qmhmq/image/upload/v1708168405/Flower_x1hzwj.svg"
              alt="flower-img"
              className="h-full w-full absolute top-0 left-0"
            />
          </div>
          <motion.p
            variants={{
              onScreen: {opacity: 1, scale: 1, transformOrigin: 'top'},
              offScreen: {opacity: 0, scale: 0},
            }}
            initial="offScreen"
            whileInView="onScreen"
            viewport={{once: true}}
            transition={{duration: 1.5, type: 'spring'}}
          >
            Find out where you and others see things the same way - and where
            not!
          </motion.p>
        </div>
      </div>
      <div className="w-[900px] h-[300px] bg-white rounded-2xl shadow-2xl p-8 flex items-center">
        <div className="h-0.5 w-full bg-gray-200 flex items-center">
          <div className="flex-1">
            <div className="bg-primary h-5 w-5 rounded-full relative">
              <motion.div
                variants={{
                  onScreen: {
                    opacity: 1,
                    scale: 1,
                    transformOrigin: 'top bottom',
                    rotate: 0,
                  },
                  offScreen: {opacity: 0, scale: 0, rotate: 15},
                }}
                initial="offScreen"
                whileInView="onScreen"
                viewport={{once: true}}
                transition={{duration: 1.5, type: 'spring', stiffness: 150}}
                className="bg-primary text-base rounded-lg h-auto px-4 py-2 absolute right-0 bottom-full my-2 text-white"
              >
                You
              </motion.div>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-skyBlue h-5 w-5 rounded-full relative">
              <motion.div
                variants={{
                  onScreen: {
                    opacity: 1,
                    scale: 1,
                    transformOrigin: 'top left',
                    rotate: 0,
                  },
                  offScreen: {opacity: 0, scale: 0, rotate: 15},
                }}
                initial="offScreen"
                whileInView="onScreen"
                viewport={{once: true}}
                transition={{duration: 1.5, type: 'spring', stiffness: 150}}
                className="bg-skyBlue text-base rounded-lg h-auto px-4 py-2 absolute top-full my-2 text-white"
              >
                Anonymous&nbsp;1
              </motion.div>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-Yellow h-5 w-5 rounded-full relative">
              <motion.div
                variants={{
                  onScreen: {
                    opacity: 1,
                    scale: 1,
                    transformOrigin: 'left bottom',
                    rotate: 0,
                  },
                  offScreen: {opacity: 0, scale: 0, rotate: 15},
                }}
                initial="offScreen"
                whileInView="onScreen"
                viewport={{once: true}}
                transition={{duration: 1.5, type: 'spring', stiffness: 150}}
                className="bg-Yellow text-base rounded-lg h-auto px-4 py-2 absolute bottom-full my-2 text-white"
              >
                Anonymous&nbsp;2
              </motion.div>
            </div>
          </div>
          <div className="flex-1 flex justify-end">
            <div className="bg-Green h-5 w-5 rounded-full relative">
              <motion.div
                variants={{
                  onScreen: {
                    opacity: 1,
                    scale: 1,
                    transformOrigin: 'top left',
                    rotate: 0,
                  },
                  offScreen: {opacity: 0, scale: 0, rotate: 15},
                }}
                initial="offScreen"
                whileInView="onScreen"
                viewport={{once: true}}
                transition={{duration: 1.5, type: 'spring', stiffness: 150}}
                className="bg-Green text-base rounded-lg h-auto px-4 py-2 absolute top-full my-2 text-white"
              >
                Anonymous&nbsp;3
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Rate
