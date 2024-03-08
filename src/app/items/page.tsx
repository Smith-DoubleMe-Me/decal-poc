import { getItems } from '@/actions/getItems';
import ItemList from '../components/ItemList';

const INITIAL_NUMBER_OF_ITEMS = 24;

export default async function home() {
  const initialItems = await getItems(INITIAL_NUMBER_OF_ITEMS, 0);

  return <ItemList initialItems={initialItems} />;
}
