import Image from 'next/image';
import Link from 'next/link';

import { getItems } from '@/actions/getItems';

export default async function Home() {
  const initialItems = await getItems(4, 0);

  return (
    <main className="flex min-h-screen items-center justify-between p-24 md:flex-col">
      <div className="h-fit w-fit overflow-hidden">
        <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-10">
          {initialItems.map((item: any) => {
            return (
              <li key={item.id} className="flex flex-col items-center">
                <Image
                  src={`${process.env.NEXT_PUBLIC_URL}/media-download/${item.id}?size=original&fileType=thumbnail`}
                  alt={item.id}
                  width={248}
                  height={248}
                  sizes="100vw"
                />
                <div>
                  <Link
                    href={`/model?id=${item.id}`}
                    className="hover:font-bold"
                  >
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
