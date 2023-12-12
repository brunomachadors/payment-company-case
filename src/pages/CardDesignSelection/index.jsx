import { useParams } from "react-router-dom";
import CardCarousel from "../../components/CardCarousel";

export default function CardDesignSelection() {
  const { cardType } = useParams();
  return (
    <>
      <h1>Escolha o seu cartao Classic</h1>
      <CardCarousel cardType={cardType} />
      <button>Selecionar desing</button>
    </>
  );
}
