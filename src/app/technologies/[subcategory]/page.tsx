import CategoriesGrid from "@/components/CategoriesGrid";
import readableTitles from "@/constants/readableTitles";
import { getCategoriesFromCouch } from "@/lib/getCategoriesFromCouch";

type Props = {
  params: {
    subcategory: string;
  };
};

export default async function SubcategoryPage({ params }: Props) {
  const { subcategory } = params;
  const subcategories = await getCategoriesFromCouch(subcategory);
  const title = readableTitles[subcategory] || subcategory;

  return (
    <CategoriesGrid title={title} categories={subcategories}/>
  );
}
