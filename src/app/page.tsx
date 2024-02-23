import ModelViewer from './components/3dviewer/ModelViewer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative flex h-[438px] w-[588px] items-center justify-center overflow-hidden rounded-3xl border">
        <ModelViewer />
      </div>
    </main>
  );
}
