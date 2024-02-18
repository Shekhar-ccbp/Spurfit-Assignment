const roles = [
  {
    title: 'Senior Full-Stack Engineer',
    description: [
      'Full-time position',
      'Berlin or remote',
      '€65-85k, 0.5-1.50% equity share options',
    ],
  },
  {
    title: 'Senior Designer',
    description: [
      'Full-time position',
      'Berlin or remote',
      '€65-85k, 0.5-1.50% equity share options',
    ],
  },
  {
    title: 'Superstar Intern',
    description: [
      'Full-time position',
      'Berlin or remote',
      '€65-85k, 0.5-1.50% equity share options',
    ],
  },
]

const Vacancy = () => (
  <div className="bg-white p-16">
    <p className="text-5xl font-bold">Open vacancies</p>
    <div className="flex gap-8 py-12 px-8">
      {roles.map(role => (
        <div className="group rounded-xl bg-cream flex-1 p-8 h-min">
          <p className="text-2xl font-semibold pb-3">{role.title}</p>
          <ul className="flex flex-col gap-2 list-disc pl-4 text-md">
            {role.description.map((description, index) => (
              <li key={index}>{description}</li>
            ))}
          </ul>
          <div className="group-hover:block hidden pt-8">
            <button
              type="button"
              className="text-white bg-black rounded-full max-w-fit p-6 py-3 text-sm"
            >
              See Details
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default Vacancy
