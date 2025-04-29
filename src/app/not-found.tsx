import Link from "next/link"

export const metadata = {
    title: "404 | Isabela",
    description: "Página não encontrada",
  };
  
const NotFound = () => {
    return (
        <div>
            <h1>404</h1>
            <div>
                <p>oops, algo deu errado</p>
            </div>
            <Link href="/"> ir para pagina inicial </Link>
        </div>
    )
}

export default NotFound

// // src/app/not-found.tsx
// import Link from "next/link";

// export default function NotFound() {
//   return (
//     <div className="text-center mt-10">
//       <h1 className="text-3xl font-bold">Página não encontrada 😢</h1>
//       <p className="mt-4">
//         Voltar para a <Link className="text-blue-600 underline" href="/">página inicial</Link>
//       </p>
//     </div>
//   );
// }
