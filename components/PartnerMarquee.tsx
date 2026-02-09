'use client';

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import './PartnerMarquee.css';

export interface Partner {
  name: string;
  icon?: string;         
  logo?: string;         
  href?: string;         
  customWidth?: string;  
}

interface PartnerMarqueeProps {
  partners: Partner[];
  title?: string;
  showUnderline?: boolean;
  speed?: number;
  gap?: string;
  height?: string;
  padding?: string;
  className?: string;
}

export const PartnerMarquee: React.FC<PartnerMarqueeProps> = ({ 
  partners, 
  title = "Official Education Partners",
  showUnderline = true,
  speed = 20,
  gap = "4rem",
  height = "80px",
  padding = "4rem 0",
  className = ""
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Duplicate for seamless loop
  const renderList = [...partners, ...partners, ...partners, ...partners]; 

  const renderPartner = (p: Partner, index: number) => {
    // Fallback: If logo fails to load or isn't provided, show text
    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
      e.currentTarget.style.display = 'none';
      // Try to find a sibling text element to show, or just let it hide
    };

    const content = (
      <>
        {p.logo ? (
          <img 
            src={p.logo} 
            alt={`${p.name} Logo`} 
            className="pm-partner-logo"
            draggable={false}
            onError={handleImageError}
            style={{ 
              width: p.customWidth ? p.customWidth : 'auto',
              maxHeight: '100%' 
            }}
          />
        ) : (
          <>
            {p.icon && <i className={`${p.icon} pm-partner-icon`}></i>}
            <span className="pm-partner-text">{p.name}</span>
          </>
        )}
      </>
    );

    const key = `partner-${index}-${p.name}`;
    const itemStyle = { height };

    if (p.href) {
      return (
        <a key={key} href={p.href} target="_blank" rel="noopener noreferrer" className="pm-partner-item" style={itemStyle}>
          {content}
        </a>
      );
    }
    return (
      <div key={key} className="pm-partner-item" style={itemStyle}>
        {content}
      </div>
    );
  };

  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const ctx = gsap.context(() => {
      // Calculate seamless scroll based on total width roughly
      gsap.to(track, { 
        xPercent: -50, 
        duration: speed, 
        ease: "none",
        repeat: -1
      });
    }, containerRef);

    return () => ctx.revert();
  }, [speed]); 

  return (
    <section className={`pm-section ${className}`} ref={containerRef} style={{ padding }}>
      {title && (
        <div className="pm-header">
          <h3 className="pm-title">{title}</h3>
          {showUnderline && <div className="pm-line"></div>}
        </div>
      )}
      <div className="pm-marquee-wrapper">
        <div className="pm-track" ref={trackRef} style={{ gap }}>
          {renderList.map((p, i) => renderPartner(p, i))}
        </div>
      </div>
    </section>
  );
};