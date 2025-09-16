import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <main>Decaffinated</main>
      <h1>It's time to ditch the all-nighters and caffeine</h1>
      <Link href="/users">
        Users
      </Link>
    </main>
  );
}
