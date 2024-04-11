import Link from "next/link";

export default function Share({params}) {
  return (
    <main>
      <h1>Hello Dinamic {params.id}</h1>{" "}
      <h1>
        <Link href="/">Home</Link>
      </h1>
      <h1>
        <Link href="/community">Community</Link>
      </h1>
      <h1>
        <Link href="/meals">Meals</Link>
      </h1>
    </main>
  );
}
