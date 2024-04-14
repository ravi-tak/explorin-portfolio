import skills from '../data/skills.json'

export default function Skills() {
  return (
    <section>
      <h1 className='heading font-bold'>My Skills</h1>
      <div className='mt-4 flex flex-wrap gap-3 text-regular'>
        {skills.map((data) => (
          <p className='px-6 py-2 bg-blue-2 rounded-corner '>{data}</p>
        ))}
      </div>
    </section>
  )
}
