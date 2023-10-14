import Head from 'next/head';
import Image from 'next/image';
import SocialLinks from './SocialLinks';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-10 md:p-16 lg:px-15% lg:py-10 max-w-screen-lg mx-auto font-roboto">
      <Head>
        <title>Alexandre Mogère</title>
        <meta name="description" content="Alexandre Mogère" />
      </Head>

      <header className="mb-12 text-center">
        <Image src="/assets/avatar.webp" alt="Avatar" width={90} height={90} className="rounded-full mb-4 mx-auto shadow-lg" />
        <h1 className="text-2xl font-semibold">Alexandre Mederic Mogère</h1>
        <p className="mt-2 text-gray-600">@heristop</p>
      </header>

      <SocialLinks />

      <footer className="mt-8 text-center bg-gray-200 text-gray-600 px-6 py-2 text-sm rounded">
        Made by heristop
      </footer>
    </div>
  );
}