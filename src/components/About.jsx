export default function About() {
  return (
    <section className='pb-10'>
      <h1 className='heading font-bold'>About Me</h1>
      <hr className='block w-[5%] xs:w-[10%] xxs:w-[15%] border-orange-2 border-4 rounded-full mb-3' />
      <p className='mt-4 text-regular'>
        "Name" is a diligent and intelligent individual from IIT Roorkee, with
        extensive expertise in web development technologies such as{' '}
        <span className='text-orange-1'>
          Django, Django REST, ReactJs, NodeJs, ExpressJs
        </span>{' '}
        and <span className='text-orange-1'>MongoDB</span>.
      </p>
      <p className='mt-4 text-regular'>
        Expert in crafting flawless frontends and robust backends, his
        commitment to excellence shines through in every project.
      </p>
    </section>
  )
}
