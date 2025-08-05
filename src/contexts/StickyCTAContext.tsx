'use client';
import { createContext, useContext, useState, ReactNode } from 'react';

interface StickyCTAContextType {
  isMinimized: boolean;
  isClosed: boolean;
  setIsMinimized: (value: boolean) => void;
  setIsClosed: (value: boolean) => void;
}

const StickyCTAContext = createContext<StickyCTAContextType | undefined>(undefined);

export function StickyCTAProvider({ children }: { children: ReactNode }) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  return (
    <StickyCTAContext.Provider value={{
      isMinimized,
      isClosed,
      setIsMinimized,
      setIsClosed
    }}>
      {children}
    </StickyCTAContext.Provider>
  );
}

export function useStickyCTA() {
  const context = useContext(StickyCTAContext);
  if (context === undefined) {
    throw new Error('useStickyCTA must be used within a StickyCTAProvider');
  }
  return context;
}