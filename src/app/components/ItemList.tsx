'use client';

import { useEffect, useState } from 'react';
import { getItems } from '@/actions/getItems';
import { useInView } from 'react-intersection-observer';

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
        </div>
      ))}
      <div ref={ref}>Loading...</div>
    </div>
  );
}
