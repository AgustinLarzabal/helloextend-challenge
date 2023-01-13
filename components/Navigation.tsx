import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <ul className="flex gap-4">
        <li>
          <Link href="/affenpinscher">Affenpinscher</Link>
        </li>
        <li>
          <Link href="/african">African</Link>
        </li>
        <li>
          <Link href="/airedale">Airedale</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
