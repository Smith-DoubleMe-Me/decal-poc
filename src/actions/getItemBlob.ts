'use server';

export const getItemBlob = async () => {
  const response = await fetch(`/api/items`);

  if (!response.ok) {
    throw new Error('Something went to wrong');
  }

  return await response.json();
};
