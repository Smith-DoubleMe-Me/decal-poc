'use server';

export const getItems = async (take: number, skip: number) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_URL}/media-management/web/new-list?&take=${take}&skip=${skip}&extension=glb`,
    );
    const data = (await res.json()) as any;

    return data.data;
  } catch (error: unknown) {
    throw new Error(`An error ${error}`);
  }
};
