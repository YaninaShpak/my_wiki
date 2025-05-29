'use client';

import CategoriesGrid from '@/components/CategoriesGrid';

const categories = [
  { label: 'JavaScript', path: '/technologies/javascript' },
  { label: 'React', path: '/technologies/react' },
];

export default function HomePage() {
  return (
    <CategoriesGrid title='Технологии' categories={categories}/>
  );
}