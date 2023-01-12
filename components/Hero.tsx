import ImageSlider from './ImageSlider'

export default function Hero() {
  //random 3 images url
  const images = [
    'https://images.unsplash.com/photo-1539036776273-021ec1d78bec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    'https://images.unsplash.com/photo-1670958259617-20127980a3d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1479&q=80',
    'https://images.unsplash.com/photo-1670922461466-17f2609a0b7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  ]

  return (
    <>
      {/* divide screen in two sections */}
      <div className="flex flex-col pt-24 md:h-[90vh] md:flex-row">
        {/* left section */}
        <div className="flex h-full w-full flex-col items-center justify-center md:w-1/2 md:border-r md:border-r-black">
          <div className="relative h-full w-full">
            <ImageSlider images={images} />
          </div>
        </div>
        {/* right section */}
        <div className="flex w-full flex-col bg-black md:w-1/2 lg:pt-16">
          <div className="flex flex-col justify-center px-4 py-6 xl:py-0 xl:px-12">
            <h1 className="text-5xl font-bold uppercase leading-tight text-[#F38425] xl:text-7xl">
              High quality
            </h1>
            <h1 className="text-5xl font-bold uppercase leading-tight text-white xl:text-7xl">
              Eye care
            </h1>
            <div className="mt-8 flex w-full flex-col space-y-5 text-white xl:w-[500px]">
              <p className="text-xl leading-relaxed">
                Located in the heart of Claremont, we are an optometry practice
                offering a personalised and holistic approach to eye care.
              </p>
              <p className="text-lg font-thin">
                At Friendlies Eyecare you are not just the next appointment, you
                are part of the family.
              </p>
              <p className="text-lg font-thin">
                Let us take time to get to know you, your eyes and your
                lifestyle to find the eyewear that is absolutely right for you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
