import React from "react";
import Layout from "../components/layout/Layout";
import Link from "next/link";
const FourOhFour = ({}) => {
  return (
    <>
      <Layout title={"404"}>
        <div className="w-full h-full bg-black">
          <div className="text-bone fixed top-1/2 left-1/2 z-10 -translate-y-1/2 -translate-x-1/2">
            <p className="font-bold md:text-7xl text-4xl text-center">
              ¡Hey! ¿Necesitas un mapa?
            </p>
            <Link href={"/"}>
              <button className="mt-3 w-full">Volver al inicio</button>
            </Link>
          </div>
          <div className="text-semiblack font-bold md:text-[300px] text-9xl animate-pulse fixed top-1/2 left-1/2 z-0 -translate-y-1/2 -translate-x-1/2">
            404
          </div>
        </div>
      </Layout>
    </>
  );
};

export default FourOhFour;
