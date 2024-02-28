import Image from 'next/image';
import Link from 'next/link';

const IMAGE_LIST = [
  {
    id: 'deer',
    src: '/deer.png',
  },
  {
    id: 'export',
    src: '/export.png',
  },
  {
    id: 'model2',
    src: '/model2.png',
  },
  {
    id: 'model4',
    src: '/model4.png',
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="h-fit w-[820px] overflow-hidden">
        <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-10">
          {IMAGE_LIST.map((image) => {
            return (
              <li key={image.id} className="flex flex-col items-center">
                <Image
                  src={image.src}
                  alt={image.id}
                  width={400}
                  height={400}
                />
                <div>
                  <Link href={`/model/${image.id}`} className="hover:font-bold">
                    View the model
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
