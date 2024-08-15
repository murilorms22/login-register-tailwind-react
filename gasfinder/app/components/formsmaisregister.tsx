import React from "react";

function FormsRegister() {
  return (
    <div>
      <div>
        <label className="block mb-1 font-semibold text-sm">Nome</label>
        <input
          className="p-2 mr-3 mb-3 rounded-xl transition-all bg-gray-50 container shadow-sm shadow-gray-500 outline-none"
          type="text"
          placeholder="Nome"
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold text-sm">E-mail</label>
        <input
          className="p-2 mr-3 mb-3 rounded-xl transition-all bg-gray-50 container shadow-sm shadow-gray-500 outline-none"
          type="text"
          placeholder="E-mail"
        />
      </div>
      <div>
        <label className="block mb-1 font-semibold text-sm">Senha</label>
        <input
          className="p-2 mr-3 mb-3 rounded-xl transition-all bg-gray-50 container shadow-sm shadow-gray-500 outline-none"
          type="password"
          placeholder="Senha"
        />
      </div>
      <div className="grid justify-items-center">
        <button
          className="p-2 bg-orange-500 font-semibold text-white rounded-xl w-36 my-5 shadow-sm
        shadow-gray-500 hover:bg-white hover:text-orange-500 hover:border-solid hover:border-orange-500 btn-internal-border"
        >
          Continuar
        </button>
      </div>
      <hr className="my-4" />
      <div className="my-5 text-center border rounded-3xl p-2">
        <button>Continue com Google</button>
      </div> 
      <div className="my-5 text-center border rounded-3xl p-2">
        <button>Continue com Facebook</button>
      </div>
      <div className="">
        <h1 className="flex flex-row">
          Já tem uma conta? Acesse-a   <div className=" text-orange-500 underline"> <a href="/login">clicando aqui.</a></div>
        </h1>
      </div>
    </div>
    
  );
}

export default FormsRegister;
