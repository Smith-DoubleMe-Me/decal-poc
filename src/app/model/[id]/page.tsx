import { Metadata, ResolvingMetadata } from 'next';

import ModelViewer from '@/app/components/3dviewer/ModelViewer';

type Props = {
  params: { id: string };
  searchParams: { [key: string]: any };
};

type IdProps = 'deer' | 'export' | 'model2' | 'model4';

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const id = params.id;

  const { url } = searchParams;

  const previousImages = (await parent).openGraph?.images || [];

  return {
    metadataBase: new URL('https://decal-poc.vercel.app/'),
    title: id,
    openGraph: {
      images: [url, ...previousImages],
    },
    description: 'DECAL 3D Model rendering',
  };
}

export default function Home({ params, searchParams }: Props) {
  const query = params.id as IdProps;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex h-[550px] w-[620px] items-center justify-center overflow-hidden rounded-3xl border">
        <ModelViewer id={query} />
      </div>
    </main>
  );
}
