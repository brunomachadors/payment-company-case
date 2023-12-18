import { useNavigate } from 'react-router-dom';
import { PinkButton } from '../Button/styles';
import { BagsIcon, ContentImage, KCash } from '../Image/styles';
import {
  ContentDescription,
  ContentTitle,
  ContentBlock,
  ContentView,
  ImageContainer,
  ContentFooter,
  ContentDescriptionComplement,
  ContentBlockLarge,
  KlarnaNameWhite,
} from './style';
import { PATHS } from '../../utils/paths';
import { useEffect, useState } from 'react';
import images from '../../json/images.json';

function Content() {
  const navigate = useNavigate();
  const [contentImages, setContentImages] = useState({});
  const [contentIcons, setContentIcons] = useState({});

  useEffect(() => {
    const loadImages = () => {
      setContentImages(images.content);
      setContentIcons(images.icons);
    };

    loadImages();
  });
  const handleRequestCard = () => {
    navigate(PATHS.createCards.index);
  };
  return (
    <ContentView>
      <ImageContainer>
        <ContentImage src={contentImages.cardKiss}></ContentImage>
      </ImageContainer>
      <ContentBlock>
        <ContentTitle>
          O cartão de crédito Klarna chegou a Portugal
        </ContentTitle>
        <ContentDescription>
          Agora você pode desfrutar da conveniência do serviço Klarna
          diretamente em suas lojas físicas e online favoritas.
        </ContentDescription>
        <PinkButton onClick={handleRequestCard}>Solicitar cartão</PinkButton>
      </ContentBlock>
      <ImageContainer>
        <ContentImage src={contentImages.cardPink}></ContentImage>
      </ImageContainer>
      <ContentBlockLarge>
        <ImageContainer>
          <KCash src={contentImages.kCash} />
        </ImageContainer>
        <ContentTitle>
          até 5% de <br /> cashback.
        </ContentTitle>
        <ContentDescription>
          Receba até 5% de cashback em todas as tuas compras e desconta os
          valores em mais compras. Compra 100€ na tua loja favorita e recebe até
          5€ para gastares no prazo de um ano.
        </ContentDescription>
        <ContentDescription>
          <BagsIcon src={contentIcons.bags} />
          <ContentDescriptionComplement>
            Compre 100€ na sua loja favorita e ganhe 3€ para trocar em até 1
            ano.
          </ContentDescriptionComplement>
        </ContentDescription>
        <PinkButton>Ganhar cashback</PinkButton>
      </ContentBlockLarge>
      <ImageContainer>
        <ContentImage src={contentImages.twoCards}></ContentImage>
      </ImageContainer>
      <ContentFooter>
        <KlarnaNameWhite>Klarna.</KlarnaNameWhite>
      </ContentFooter>
    </ContentView>
  );
}

export default Content;
