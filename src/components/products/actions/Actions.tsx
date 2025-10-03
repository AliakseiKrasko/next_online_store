import Image from 'next/image';
import database from '@/data/database.json';
import ProductCard from '@/components/products/ProductsCard';

const Actions = () => {
  const actionProducts = database.products.filter((p) => p.categories.includes('actions'));

  return (
    <section>
      <div className="flex flex-col justify-center xl:max-w-[1208px]">
        <div className="mb-4 md:mb-8 xl:mb-10 flex flex-row justify-between">
          <h2 className="text-2xl xl:text-4xl text-left font-bold">Акции</h2>
          <button className="flex flex-row items-center gap-x-2 cursor-pointer">
            <p className="text-base text-center text-[#606060] hover:text-[#bfbfbf] duration-300">
              Все акции
            </p>
            <Image
              src="/icon-header/icon-arrow-right.svg"
              alt="К акциям"
              width={24}
              height={24}
              sizes="24px"
            />
          </button>
        </div>
        <ul
          className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-10
            justify-items-center"
        >
          {actionProducts.slice(0, 4).map((item, index) => (
            <li
              key={item.id}
              className={`before:content-none after:content-none
              ${index >= 3 ? 'hidden xl:block' : ''}`}
            >
              <ProductCard {...item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Actions;
