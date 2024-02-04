import Image from "next/image"

export default function Home() {
  return (
    <main className='flex h-screen items-center p-24'>
      <div className='container flex flex-row items-center justify-center space-x-4'>
        <div className='text-white'>
          <span className='font-inter'>Hello, my name is</span>
          <div className='flex flex-row space-x-3'>
            <h1 className='text-xxl font-league md:text-5xl font-black leading-none pb-4 md:pb-8'>
              Adam Richard Turner
            </h1>
          </div>
          <div className='space-y-4 font-inter'>
            <p className='text-base'>
              I am a{" "}
              <span className='font-bold text-secondary'>
                Software Engineer
              </span>{" "}
              based in London, skilled at crafting the Front End for web
              applications using TypeScript and Javascript, as well as a variety
              of other tools.
            </p>
            <h3 className='text-'>Connect or contact me</h3>
          </div>
        </div>
        <div>
          <Image
            src='/adam-thumb.png'
            width={400}
            height={400}
            alt='Adam Richard Turner'
          />
        </div>
      </div>
    </main>
  )
}
