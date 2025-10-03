import Image from 'next/image';

function SlideTwo() {
  return (
    <div className="mb-10 md:mb-15 xl:mb-20 h-20 md:h-40 xl:h-50 w-full relative">
      <Image
        src="/images/graphics/slide-2.jpg"
        alt="Слайд"
        fill
        priority
        unoptimized
        className="object-cover"
      />
    </div>
  );
}

export default SlideTwo;
