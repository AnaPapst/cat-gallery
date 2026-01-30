import "./styles.css";

import CatList from "./CatList/CatList";

export default function App() {
  const dummy_data = [
    {
      name: "Bartho",
      age: 8,
      color: "Branco com manchas rajadinhas",
      owners: "Ana e Rafa",
      curiosity: "É poucas ideia.",
      image: "https://i.imgur.com/ZsjcsKq.jpeg",
    },
    {
      name: "Félix",
      age: 8,
      color: "Branco com manchas pretas",
      owners: "Ana e Rafa",
      curiosity: "Tem a pança dura e é banguelo.",
      image: "https://i.imgur.com/6pMslak.jpeg",
    },
    {
      name: "Shimi",
      age: 7,
      color: "Marronza",
      owners: "Ana e Rafa",
      curiosity: "Cronicamente dependente do Rafa.",
      image: "https://i.imgur.com/EDaKza6.jpeg",
    },
    {
      name: "Popo",
      age: 4,
      color: "Laranjo",
      owners: "Ana e Rafa",
      curiosity: "Quando contrariado, faz xixi fora do lugar.",
      image: "https://i.imgur.com/7ou3Tlb.jpeg",
    },
    {
      name: "Mimi",
      age: 8,
      color: "Pretinha",
      owners: "Guto",
      curiosity:
        "Antissocial, tem apenas a ponteira do rabo e adora o cheiro de sabonete Phebo (do verde ou do roxo)",
      image: "https://i.imgur.com/miNdmF8.jpeg",
    },
    {
      name: "Zorro",
      age: 8,
      color: "Frajola",
      owners: "Guto",
      curiosity:
        "Sociável, tem o toc de entrar e sair por uma mesma porta várias vezes e ser escovado é a coisa que ele mais ama nesse mundo",
      image: "https://i.imgur.com/MZCpTot.jpeg",
    },
    {
      name: "Boludo",
      age: 2,
      color: "Rajadinho",
      owners: "Guto",
      curiosity:
        "Sociável, metido a macho alfa, adora se esconder para dar susto em quem está passando, e sempre está procurando por novas rotas de fuga para bater perna na rua",
      image: "https://i.imgur.com/jtcpAUU.jpeg",
    },
    {
      name: "Kiwi",
      age: 12,
      color: "Frajola",
      owners: "Sofi e Gabs",
      curiosity:
        "O ancião com alma de moleque. Louco por frango. Amoroso d+++++",
      image: "https://i.imgur.com/5dc6M2R.jpeg",
    },
    {
      name: "Tata",
      age: 11,
      color: "Rajadinha escura",
      owners: "Sofi e Gabs",
      curiosity:
        "Rainha da casa. Imensidão de gato. Tá sempre julgando todo mundo. Toda hora é hora pra comer",
      image: "https://i.imgur.com/IA7KwDb.jpeg",
    },
    {
      name: "Granola",
      age: 10,
      color: "Siamesa pontuda",
      owners: "Sofi e Gabs",
      curiosity:
        "Vive como uma sombra atrás da gente, mas tem medo de visita. Gosta de tapa no bumbum. Deixa presentes vivos pra gente embaixo da cama",
      image: "https://i.imgur.com/uKhLLnK.jpeg",
    },
  ];
  return (
    <div className="App">
      <h1>Cat Gallery</h1>
      <CatList data={dummy_data} />
    </div>
  );
}
