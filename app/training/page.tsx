
import React from 'react';
 
import { TrainingHeader } from '../../components/TrainingHeader';
import { PartnerMarquee } from '../../components/PartnerMarquee';

export const metadata = {
  title: 'Training Academy',
  description: 'Industry leading automotive education and certification.',
};

// Cloudinary Configuration
// Ensure images are uploaded to your Cloudinary 'training-partners' folder
const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'autoevolution';
const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;


const ACADEMIC_PARTNERS = [
   { 
    name: 'Bosch', 
    logo: `${BASE_URL}/v1770640503/bosch_kszcsq.svg`, 
    customWidth: '130px' 
  },
  { 
    name: 'TexaEdu', 
    logo: `${BASE_URL}/v1770640506/texaedu_grrz6m.png`, 
    customWidth: '120px' 
  },
  { 
    name: 'Electude', 
    logo: `${BASE_URL}/v1770640503/electude-logo-png-transparent_w3ybpz.png`, 
    customWidth: '140px' 
  },
  { 
    name: 'Texa', 
    logo: `${BASE_URL}/v1770640505/logo-TEXA_unypht.jpg`, 
    customWidth: '65px' 
  },
  { 
    name: 'ASE', 
    logo: `${BASE_URL}/v1770640502/ase-logo_yvzdek.png`, 
    customWidth: '65px' 
  },
  { 
    name: 'Auto_Evolution', 
    logo: `${BASE_URL}/v1770640503/auto-evolution_uduzbp.png`, 
    customWidth: '170px' 
  },
  { 
    name: 'IMI', 
    logo: `${BASE_URL}/v1770640504/imi-logo-min-original_eh5bea.png`, 
    customWidth: '160px' 
  },
];

export default function TrainingPage() {
  return (
    <>
      <TrainingHeader />
      <PartnerMarquee partners={ACADEMIC_PARTNERS} 
      speed={70}
      />
    </>
  );
}
