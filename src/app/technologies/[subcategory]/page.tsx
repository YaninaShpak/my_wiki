import CategoriesGrid from "@/components/CategoriesGrid";
import readableTitles from "@/constants/readableTitles";

type Props = {
  params: {
    subcategory: string;
  };
};

type Section = {
  label: string;
  path: string;
};

const contentBySubcategory: Record<string, Section[] > = {
  javascript: [
    { label: 'Функции', path: '/technologies/javascript/functions' },
    { label: 'Типы данных', path: '/technologies/javascript/types' },
  ],
  react: [
    { label: 'Hooks', path: '/technologies/react/hooks' },
    { label: 'Components', path: '/technologies/react/components' },
  ],
};

export default async function SubcategoryPage({ params }: Props) {
  const { subcategory } = await params;
  const subcategories = contentBySubcategory[subcategory];
  const title = readableTitles[subcategory] || subcategory;

  return (
    <CategoriesGrid title={title} categories={subcategories}/>
  );
}
