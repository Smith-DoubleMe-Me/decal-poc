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

  return {
    metadataBase: new URL('https://main.doysagsh5ahos.amplifyapp.com/'),
    title: id,
    openGraph: {
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_URL}/media-download/${id}?size=original&fileType=thumbnail`,
          width: 400,
          height: 400,
        },
      ],
    },
    description: 'DECAL 3D Model rendering',
  };
}

export default function Home({ params }: Props) {
  const query = params.id as IdProps;

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div
        className="relative flex h-[258px] w-[339px] items-center justify-center overflow-hidden
    rounded-3xl border md:h-[522px] md:w-[700px]"
      >
        <ModelViewer id={query} />
      </div>
    </main>
  );
}
