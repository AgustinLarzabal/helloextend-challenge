import Link from "next/link";

const Header = () => {
  return (
    <Link href="/">
      <h1 className="font-bold text-3xl">Dog Breeds</h1>
    </Link>
  );
};

export default Header;
