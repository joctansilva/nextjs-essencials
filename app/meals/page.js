import Link from "next/link";

export default function Meals() {
  return (
    <main>
      <h1>Hello Meals!</h1>{" "}
      <h1>
        <Link href="/">Home</Link>
      </h1>
      <h1>
        <Link href="/community">Community</Link>
      </h1>
      <h1>
        <Link href="/meals/share">Meals/Share</Link>
      </h1>
    </main>
  );
}
