import { getImageUrl } from '../utils'

export default function Experience() {
  return (
    <section className='pb-10'>
      <h1 className='heading font-bold'>My Past Experience</h1>
      <div className='mt-4 flex gap-4 bg-blue-2 p-6 rounded-corner'>
        <div className='xs:hidden'>
          <img
            src={getImageUrl('my-avatar.svg')}
            alt=''
          />
        </div>
        <div className='flex flex-col gap-4'>
          <h2 className='font-bold sub-heading-1'>
            Frontend Intern <br className='hidden xs:block' /><span className='text-orange-1'>|</span>{' '}
            <span className='text-regular'>May’23 - July’23</span>
          </h2>
          <p className='text-regular'>
            Hey there, I'm thrilled to welcome you to my virtual corner of the
            internet. I'm currently a first-semester B.Tech student at {' '}
            <span className='font-bold'>Shivalik University</span>, where I'm
            diving headfirst into the fascinating world of technology.
          </p>
        </div>
      </div>
    </section>
  )
}
