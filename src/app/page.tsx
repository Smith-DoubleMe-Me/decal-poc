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

async function getData() {
  const res = await fetch(
    'https://gateway-server-new.dev-twin.world//media-management/category',
  );

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

interface Data {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export default async function Home() {
  const data: Data[] = await getData();

  return (
    <main className="flex min-h-screen items-center justify-between p-24 md:flex-col">
      <div className="h-fit w-fit overflow-hidden">
        <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-10">
          {IMAGE_LIST.map((image) => {
            return (
              <li key={image.id} className="flex flex-col items-center">
                <Image
                  src={image.src}
                  alt={image.id}
                  width={400}
                  height={400}
                  sizes="100vw"
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
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
        <ul>
          {data.data.map((d) => {
            return <li key={d.id}>{d.name}</li>;
          })}
        </ul>
      </div>
    </main>
  );
}
