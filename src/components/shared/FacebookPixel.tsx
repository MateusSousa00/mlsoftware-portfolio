'use client';
import { useEffect } from 'react';
import Script from 'next/script';
import Image from 'next/image';

interface FacebookPixelProps {
  pixelId: string;
}

type FacebookPixelEvent = {
  [key: string]: string | number | boolean | undefined;
};

type FacebookPixelFunction = {
  (action: 'init', pixelId: string): void;
  (action: 'track', eventName: string, parameters?: FacebookPixelEvent): void;
  (action: 'trackCustom', eventName: string, parameters?: FacebookPixelEvent): void;
  callMethod?: (...args: unknown[]) => void;
  queue?: unknown[];
  push?: (args: unknown[]) => void;
  loaded?: boolean;
  version?: string;
};

declare global {
  interface Window {
    fbq: FacebookPixelFunction;
    _fbq?: FacebookPixelFunction;
  }
}

export default function FacebookPixel({ pixelId }: FacebookPixelProps) {
  useEffect(() => {
    // Initialize Facebook Pixel
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('init', pixelId);
      window.fbq('track', 'PageView');
    }
  }, [pixelId]);

  return (
    <>
      <Script
        id="facebook-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${pixelId}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <Image
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  );
}

// Utility functions for tracking custom events
export const trackEvent = (eventName: string, parameters?: FacebookPixelEvent) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName, parameters);
  }
};

export const trackCustomEvent = (eventName: string, parameters?: FacebookPixelEvent) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', eventName, parameters);
  }
};

// Predefined event tracking functions
export const trackWhatsAppClick = (source: string) => {
  trackEvent('Lead', {
    content_name: 'WhatsApp Contact',
    content_category: 'Contact',
    source: source,
  });
};

export const trackFormSubmission = () => {
  trackEvent('Contact', {
    content_name: 'Contact Form',
    content_category: 'Contact',
  });
};

export const trackScheduleClick = () => {
  trackEvent('Schedule', {
    content_name: 'Schedule Meeting',
    content_category: 'Contact',
  });
};