import doing from '../data/doing.json'
import { getImageUrl } from '../utils'

export default function Doing() {
  return (
    <section className='pb-10'>
      <h1 className='heading font-bold'>What I’m Doing</h1>
      <div className='mt-4 flex flex-wrap justify-between gap-10 xs:gap-6'>
        {doing.map((data) => (
          <div className='flex gap-6 w-[46%] xs:w-full bg-blue-2 p-6 rounded-corner'>
            <div className='w-[30%] lg:hidden'>
              <img
                className='mt-4'
                src={getImageUrl(data.imgSrc)}
                alt=''
              />
            </div>
            <div className='flex flex-col'>
              <h2 className='font-bold sub-heading-1 mb-4 xxs:mb-2'>{data.title}</h2>
              <p className='text-regular'>{data.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
