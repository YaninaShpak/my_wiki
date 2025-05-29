'use client';

import CategoriesGrid from '@/components/CategoriesGrid';

const categories = [
  { label: 'Технологии', path: '/technologies' },
  { label: 'Инструменты', path: '/tools' },
];

export default function HomePage() {
  return (
    <CategoriesGrid categories={categories}/>
  );
}
