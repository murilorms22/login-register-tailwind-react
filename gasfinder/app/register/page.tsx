import React from "react";
import Image from "next/image";
import TextoRegister from "../components/Textoregister";
import FormsRegister from "../components/formsmaisregister";

function Register() {
  return (
    <div className="bg-gradient-to-r from-orange-400 to-orange-800  h-screen flex items-center">
      <div className="bg-white rounded-xl mx-auto p-14 mr-auto w-auto h-auto container flex items-center justify-center shadow-lg shadow-slate-400">
        <Image src="/registerimg.png" alt="Register Image" width={500} height={300} />
        <div>
          <TextoRegister />
        <div className="px-14">
          <FormsRegister />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
