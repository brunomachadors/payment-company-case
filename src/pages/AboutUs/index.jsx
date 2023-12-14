import BusinessCard from '../../components/BusinessCard';
import { AboutUsView, PageTitle } from './style';

function AboutUs() {
  return (
    <AboutUsView>
      <PageTitle>Sobre nós</PageTitle>
      <BusinessCard name={'aline'}></BusinessCard>
      <BusinessCard name={'cristiana'}></BusinessCard>
      <BusinessCard name={'kae'}></BusinessCard>
    </AboutUsView>
  );
}

export default AboutUs;
