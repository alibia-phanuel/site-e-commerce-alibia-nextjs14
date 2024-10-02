import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
// import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative md:pt-6 border-b border-orange-500  shadow-lg bg-white">
      {/**MOBILE */}
      <div className="flex items-center justify-between h-full md:hidden">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Logo" width={24} height={24} />
          <div className="text-2xl tracking-wide text-orange-500">ALIBIA</div>
        </Link>
        <Menu />
      </div>
      {/**Bigger scrrens */}
      <div className="bg-white">
        <div className="hidden md:flex items-center justify-between h-full gap-8 ">
          {/**Left */}
          <div className="flex items-center gap-12  justify-between  w-full">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="Logo" width={24} height={24} />
              <div className="text-2xl tracking-wide text-orange-500">
                ALIBIA
              </div>
            </Link>
            <div className="max-md:hidden xl:flex gap-4 text-gray-600">
              <Link href="/" className="mx-1">
                Accueil
              </Link>
              <Link href="../produits" className="mx-1">
                Toutes les catégories
              </Link>
              <Link href="../a-propos" className="mx-1">
                À propos{" "}
              </Link>
              <Link href="../contact" className="mx-1">
                Contact
              </Link>
            </div>

            <div className="flex items-center justify-between gap-8">
              {/* <NavBarIcons /> */}
            </div>
          </div>
          {/**RIGHT */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
