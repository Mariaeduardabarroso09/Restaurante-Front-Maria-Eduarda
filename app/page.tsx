"use client"
import { collectRoutesUsingEdgeRuntime } from "next/dist/build/utils";
import Image from "next/image";

export default function Home() {

  async function cadastrar(e:any) {
    e.preventDefault()
    alert("Produto cadastrado com sucesso!")
    
  }

  return (


    <main className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

    <div className="w-full max-w-lg bg-white rounded-xl shadow-md p-8 grid grid-cols gap-4">

     <Image
     src="/logotipo-restaurante.png"
     alt="Logotipo"
     width={200}
     height={200}
     className="mx-auto mb-4"
     />

      <h1 className="text-2xl font-bold mb-6">
        Restaurante - Come mais!!!
        </h1>

      <input type="text" 
      placeholder="Digite a descricao..." 
      className="w-full rounded-x1 border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900"
      />

      <input type="number" 
      placeholder="Digite o preco..." 
      className="w-full rounded-x1 border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900"
      />
      

      <input type="text" 
      placeholder="Digite a categoria..." 
      className="w-full rounded-x1 border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900"
      />

      <input type="text" 
      placeholder="O lanche esta disponivel?"
      className="w-full rounded-x1 border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900"
      />

      <button
      onClick={cadastrar}
        className="w-full rounded-x1
        bg-amber-400 px-4 py-3
        font-medium text-white shadow-sm cursor-pointer
        hover:bg-amber-600"
        >
        
        Cadastrar
        </button>
    </div>
   </main>
  );
}

