import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Time to get started! para testar
      </h1>
      <h1>
        <Link href="/community">Community</Link>
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
