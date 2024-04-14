import info from '../data/info.json'
import { getImageUrl } from '../utils'

export default function Nav() {
  return (
    // sticky top-[40px] max-h-screen
    <nav className='bg-blue-1 self-start rounded-corner sticky top-[2rem] lg:static w-full'>
      <aside className='outter-padding lg:hidden'>
        <div className='flex flex-col gap-6 h-full justify-between'>
          <div className='bg-white self-center center rounded-corner w-[12em]'>
            <img
              src={getImageUrl('my-avatar.svg')}
              alt=''
            />
          </div>
          <div className='flex flex-col gap-6 items-center'>
            <h1 className='heading font-bold'>Name</h1>
            <p className='bg-blue-2 px-10 py-2 rounded-corner text-regular text-center'>
              Frontend Developer
            </p>
            <div className='flex gap-6 justify-center self-stretch'>
              <a href=''>
                <img
                  className='inline-block'
                  src={getImageUrl('linkedin.svg')}
                  alt=''
                />
              </a>
              <a href=''>
                <img
                  className='inline-block'
                  src={getImageUrl('github.svg')}
                  alt=''
                />
              </a>
              <a href=''>
                <img
                  className='inline-block'
                  src={getImageUrl('leetcode.svg')}
                  alt=''
                />
              </a>
            </div>
          </div>
          <hr className='block border-orange-2 border-1' />
          <div className='flex flex-col gap-4'>
            {info.map((data, index) => (
              <div
                key={index}
                className='flex gap-6'
              >
                <div className='w-[3em] center bg-blue-2 rounded-lg'>
                  <img
                    src={getImageUrl(data.imgSrc)}
                    alt=''
                  />
                </div>
                <div>
                  <span className='block text-xs text-gray'>{data.title}</span>
                  <p className='text-sm'>{data.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </aside>

      <section className='hidden lg:flex lg:gap-8 xs:flex-col xs:items-center xs:gap-8 outter-padding gap-14 justify-between'>
        <div className='bg-white center rounded-corner w-[25%] xs:w-[50%]'>
          <img
            src={getImageUrl('my-avatar.svg')}
            alt=''
          />
        </div>
        <div className='center flex-col grow items-start xs:items-center gap-4'>
          <h1 className='font-bold heading xs:text-center'>Shlok Bisht</h1>
          <p className='border-s-4 ps-2 border-orange-1 xs:block'>
            Frontend Developer
          </p>
          <p className='text-sm xxs:text-regular px-6 py-2 bg-blue-2 rounded-corner inline'>
            II Year (2023-27)
          </p>
        </div>
        <div className='flex gap-4 xs:gap-8 items-start'>
          <a href=''>
            <img
              className='inline-block'
              src={getImageUrl('linkedin.svg')}
              alt=''
            />
          </a>
          <a href=''>
            <img
              className='inline-block'
              src={getImageUrl('github.svg')}
              alt=''
            />
          </a>
          <a href=''>
            <img
              className='inline-block'
              src={getImageUrl('leetcode.svg')}
              alt=''
            />
          </a>
        </div>
      </section>
    </nav>
  )
}
