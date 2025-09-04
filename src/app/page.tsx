import Link from "next/link"
import React from "react"

const Home = () => {
  return (
      <main>
      <section id="inicio" className="h-screen bg-pink-100 flex items-center justify-center bg-gradient-to-b from-[#380d37] to-[#2e34be]">
        <div className="text-center">
          <h2 className="mt-4 xl:mt-8">Oi mundo com Next.js</h2>
          <p className="mt-4 xl:mt-8"> Primeiro texto escito </p>
        </div>
      </section>

      <section id="sobre" className="h-screen bg-blue-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="mt-4 xl:mt-8">Sobre mim</h2>
          <p className="mt-4 xl:mt-8"> Jaboticaba teste sobre mim</p>
        </div>
      </section>

      <section id="skills" className="h-screen bg-blue-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="mt-4 xl:mt-8">Sobre mim</h2>
          <p className="mt-4 xl:mt-8"> Jaboticaba teste sobre mim</p>
        </div>
      </section>      

      <section id="projetos" className="h-screen bg-green-100 flex flex-col items-center justify-center">
        <div className="text-center">
          <h2 className="mt-4 xl:mt-8">Meus Projetos</h2>
          <p className="mt-4 xl:mt-8"> meu terceiro teste e depois eu penso no q escrever</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 ">
        <div className="bg-white rounded-lg shadow-md hover:shadow-xl max-w-xs mx-auto transform hover:-translate-y-2 transition duration-300">
          <div className="rounded-t-lg w-full h-48 bg-gray-300 flex items-center justify-center">
            <span className="text-gray-500">Imagem aqui</span>
          </div>
          
          <div className="p-4 text-center">
            <h3 className="text-xl font-bold mb-2">Projeto Teste</h3>
            <p className="text-gray-600 mb-4">Descrição breve do projeto exemplo.</p>
            <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-700">Ver Projeto</button>
          </div>
          </div>

          <div className="bg-white rounded-lg max-w-xs mx-auto hover:shadow-2xl transition duration-300">
          <div className="rounded-t-lg w-full h-48 bg-gray-300 flex items-center justify-center">
            <span className="text-gray-500">Imagem aqui</span>
          </div>

          <div className="p-4 text-center">
            <h3 className="text-xl font-bold mb-2">Projeto Teste</h3>
            <p className="text-gray-600 mb-4">Descrição breve do projeto exemplo.</p>
            <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-700">Ver Projeto</button>
          </div>
          </div>

          <div className="bg-white rounded-lg shadow-md hover:shadow-xl max-w-xs mx-auto transform hover:-translate-y-2 transition duration-300">
          <div className="rounded-t-lg w-full h-48 bg-gray-300 flex items-center justify-center">
            <span className="text-gray-500">Imagem aqui</span>
          </div>

          <div className="p-4 text-center">
            <h3 className="text-xl font-bold mb-2">Projeto Teste</h3>
            <p className="text-gray-600 mb-4">Descrição breve do projeto exemplo.</p>
            <button className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-700">Ver Projeto</button>
          </div>
          </div>
        </div>
      </section>

      <section id="contato" className="h-screen bg-yellow-100 flex items-center justify-center">
        <div className="text-center">
        <h2 className="mt-4 xl:mt-8 bg-black text-center">Contato</h2>
        <p className="mt-4 xl:mt-8"> hasdguisahjfahak </p>
        <button className="bg-purple-500 px-4 xl:px-8 py-2 rounded-md hover:bg-purple-700"> me mande uma mensagem </button>
        {/* Pode ser um formulário futuramente */}
        </div>
        </section>
      </main>
  );
};

export default Home