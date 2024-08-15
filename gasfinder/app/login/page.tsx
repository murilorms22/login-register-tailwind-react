import React from "react";
import Image from "next/image";
import Textologin from "../components/textologin";
import FormsLogin from "../components/formsmaislogin";

function LoginPage() {
  return (
    <div className="bg-gradient-to-r from-orange-400 to-orange-800  h-screen flex items-center">
      <div className="bg-white rounded-xl mx-auto p-14 mr-auto w-auto h-auto container flex items-center justify-center shadow-lg shadow-slate-400">
        <Image src="/loginimg.png" alt="LoginImage" width={500} height={300}/>
        <div>
          <Textologin />
        <div  className="px-14">
        <FormsLogin />
      </div>
        </div>
      </div>
    </div>
    
  );
}

export default LoginPage;
