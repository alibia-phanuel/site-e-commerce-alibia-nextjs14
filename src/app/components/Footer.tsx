import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="py-24 px-4 md:px-8 lg:px-16 xl:32 2xl:px-64 bg-gray-100 text-sm mt-24">
      {/* TOP */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* LEFT */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            <div className="text-2xl tracking-wide text-orange-500 font-semibold">
              ALIBIA
            </div>
          </Link>
          <p className="text-gray-500">
            N&apos;hésitez pas à nous contacter pour toute demande de
            renseignements ou à passer nous voir directement sur douala !
          </p>
          <span className="font-semibold text-gray-500 ">
            <a href="mailto:phanuel.alibia@gmail.com">
              phanuel.alibia@gmail.com
            </a>
          </span>
          <div className="text-gray-500 underline">
            <a href="tel:696603305">Appelez-nous au 696603305 clique juste</a>
          </div>

          <div className="flex gap-6">
            <Link href="https://www.facebook.com/aliabiaNext" target="blanck">
              <Image src="/facebook.png" alt="" width={16} height={16} />
            </Link>
            <Link
              href="https://www.youtube.com/@phanuelalibia/?sub_confirmation=1"
              target="blanck"
            >
              <Image src="/youtube.png" alt="" width={16} height={16} />
            </Link>
          </div>
        </div>
        {/* CENTER */}
        <div className="hidden lg:flex justify-between w-1/2">
          <div className="flex flex-col justify-between text-gray-500">
            <h1 className=" text-lg text-orange-500 font-semibold">SOCIÉTÉ</h1>
            <div className="flex flex-col gap-6">
              <Link href="../produits">Toutes les catégories</Link>
              <Link href="">Accessoires</Link>
              <Link href="../a-propos">À propos</Link>
              <Link href="../contact">Contact</Link>
            </div>
          </div>
          <div className="flex  justify-between  flex-col text-gray-500">
            <h1 className="text-lg text-orange-500 font-semibold">AIDES</h1>
            <p>
              N&apos;hésitez pas à nous contacter pour toute demande de
              renseignements ou à <br /> passer nous voir directement sur douala
              !
            </p>
            <div className="  underline">
              <a href="tel:696603305">Appelez-nous au 696603305 clique juste</a>
            </div>
          </div>
        </div>
        {/* RIGHT */}
      </div>
      {/* BOTTOM */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
        <div className="text-orange-500">© 2024 alibia </div>
      </div>
    </div>
  );
};

export default Footer;
