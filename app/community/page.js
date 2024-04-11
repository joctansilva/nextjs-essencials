import Link from "next/link";

export default function Community() {
  return (
    <main>
      <h1>Hello Community</h1>{" "}
      <h1>
        <Link href="/">Home</Link>
      </h1>
      <h1>
        <Link href="/meals">Meals</Link>
      </h1>
      <h1>
        <Link href="/meals/share">Meals/Share</Link>
      </h1>
    </main>
  );
}
