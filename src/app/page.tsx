import ModelViewer from './components/3dviewer/ModelViewer';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ModelViewer />
    </main>
  );
}
