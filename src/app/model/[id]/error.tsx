'use client';

import Link from 'next/link';

export default function Error() {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <Link href="/">Go the the home</Link>
    </div>
  );
}
