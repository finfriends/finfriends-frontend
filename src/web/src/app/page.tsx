import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href="/login">go to login</Link>
      <br />
      <Link href="/message-test">go to test</Link>
    </main>
  );
}
