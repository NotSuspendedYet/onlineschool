import React from 'react';

// Исправляем типы для Layout
declare module '../../components/common/Layout' {
  interface LayoutProps {
    children?: React.ReactNode;
    title?: string;
  }
} 