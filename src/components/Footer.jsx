import { getImageUrl } from '../utils'

export default function Footer() {
  return (
    <section className='bg-blue-1 p-16 xs:p-8 flex xxs:flex-col xxs:gap-8 justify-between text-white tracking-widest leading-relaxed'>
      <a
        className='w-[45%]'
        href='https://www.explorin.io/'
        target='_blank'
      >
        <div className='xs:w-[80%] xxs:w-full xs:center'>
          <img
            src={getImageUrl('logo.svg')}
            alt=''
          />
        </div>
      </a>
      <div className='flex flex-col xxs:gap-2 justify-around'>
        <div className='flex gap-2'>
          <img
            className='w-[10%] xs:w-[1em]'
            src={getImageUrl('email-icon.svg')}
            alt=''
          />
          <p className='text-regular'>: admin@explorin.io</p>
        </div>
        <div className='flex gap-2'>
          <img
            className='w-[10%] xs:w-[1em]'
            src={getImageUrl('phone-icon.svg')}
            alt=''
          />
          <p className='text-regular'>: +91 9950409065</p>
        </div>
      </div>
    </section>
  )
}
