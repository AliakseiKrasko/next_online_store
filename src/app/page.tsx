import Slider from '@/components/slider/Slider';
import Actions from '@/components/products/actions/Actions';
import NewProducts from '@/components/products/newProducts/NewPriducts';

export default function Home() {
  return (
    <main className="w-full mx-auto mb-20">
      <Slider />
      <div className="px-[max(12px,calc((100%-1208px)/2))] flex flex-col gap-y-20 md:mb-25 xl:mb-30">
        <Actions />
        <NewProducts />
      </div>
    </main>
  );
}
