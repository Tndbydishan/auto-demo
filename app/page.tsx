
import React from 'react';
import { PageHero } from '../components/PageHero';
import { PartnerMarquee } from '../components/PartnerMarquee';
import { ContactInfoSection } from '../components/ContactInfoSection';
import { BoldStatement } from '../components/BoldStatement';
import { TechnicianCertification } from '../components/TechnicianCertification';
import { QualityAssurance } from '../components/QualityAssurance';

export const metadata = {
  title: 'Auto Evolution Workshop',
  description: 'Industry leading automotive service center.',
};

// Cloudinary Configuration
// Ensure images are uploaded to your Cloudinary 'training-partners' folder
const CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'autoevolution';
const BASE_URL = `https://res.cloudinary.com/${CLOUD_NAME}/image/upload`;


const PARTNERS = [
   { 
    name: 'Quality', 
    logo: `${BASE_URL}/v1770640526/quality_aegg0h.png`, 
    customWidth: '140px' 
  },
  { 
    name: 'OEM', 
    logo: `${BASE_URL}/v1770640525/Oem_wnus5b.png`, 
    customWidth: '140px' 
  },
  { 
    name: 'Certified', 
    logo: `${BASE_URL}/v1770640525/Certified_mdc2jf.png`, 
    customWidth: '130px' 
  },
     { 
    name: 'Quality', 
    logo: `${BASE_URL}/v1770640526/quality_aegg0h.png`, 
    customWidth: '140px' 
  },
  { 
    name: 'OEM', 
    logo: `${BASE_URL}/v1770640525/Oem_wnus5b.png`, 
    customWidth: '140px' 
  },
  { 
    name: 'Certified', 
    logo: `${BASE_URL}/v1770640525/Certified_mdc2jf.png`, 
    customWidth: '130px' 
  },
     { 
    name: 'Quality', 
    logo: `${BASE_URL}/v1770640526/quality_aegg0h.png`, 
    customWidth: '140px' 
  },
  { 
    name: 'OEM', 
    logo: `${BASE_URL}/v1770640525/Oem_wnus5b.png`, 
    customWidth: '140px' 
  },
  { 
    name: 'Certified', 
    logo: `${BASE_URL}/v1770640525/Certified_mdc2jf.png`, 
    customWidth: '130px' 
  },

];

export default function HomePage() {
  return (
    <>
      <PageHero 
        title={<>AUTO EVOLUTION<br/><span style={{color: '#D12027'}}>WORKSHOP</span></>}
        subtitle="EST. 2018 | PREMIER AUTOMOTIVE CARE"
        mediaType="image"
        mediaSource="https://images.unsplash.com/photo-1653618293287-a66eb0c4271a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      
      <div className="px-4 lg:px-12 py-12 flex flex-col gap-12 max-w-[1440px] mx-auto">
         <ContactInfoSection />
      </div>

            <BoldStatement />

                  <QualityAssurance />

            <TechnicianCertification />

      <PartnerMarquee 
        partners={PARTNERS} 
        title="" 
        showUnderline={false}
        speed={65}
        gap="5rem"
        height="50px"
        padding="2rem 0"
      />
    </>
  );
}
