'use client';

import { useEffect, useState } from 'react';
import { getItems } from '@/actions/getItems';
import { useInView } from 'react-intersection-observer';

import ModelViewer from './3dviewer/ModelViewer';
import Image from 'next/image';

type ItemListProps = {
  initialItems: any[];
};

const NUMBER_OF_ITEMS_TO_FETCH = 24;

export default function ItemList({ initialItems }: ItemListProps) {
  const [items, setItems] = useState(initialItems);
  const [offset, setOffset] = useState(NUMBER_OF_ITEMS_TO_FETCH);
  const { ref, inView } = useInView();

  const loadMoreItems = async () => {
    const apiItems = await getItems(24, offset);
    setItems([...items, ...apiItems]);
    setOffset(offset + NUMBER_OF_ITEMS_TO_FETCH);
  };

  useEffect(() => {
    if (inView) {
      loadMoreItems();
    }
  }, [inView]);

  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => (
        <div key={item.id} className="flex flex-col gap-2">
          <h3 className="text-lg font-bold">{item.name}</h3>
          <p>{item.description}</p>
          <Image
            src={`${process.env.NEXT_PUBLIC_URL}/media-download/${item.id}?size=original&fileType=thumbnail`}
            alt={item.name}
            width={100}
            height={100}
            className="pointer-events-none"
            priority
          />
          <ModelViewer id={item.id} />
        </div>
      ))}
      <div ref={ref}>Loading...</div>
    </div>
  );
}
