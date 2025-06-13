import { couchdb } from "./couchdbClient";

type Section = {
  label: string;
  path: string;
};

type CouchDBArticle = {
  doc: {
    _id: string;
    _rev: string;
    title: string;
    category: string;
    subcategory: string;
    slug: string;
    content: string;
    createdAt: string;
  };
};

export async function getCategoriesFromCouch(subcategory: string): Promise<Section[]> {
  const dbName = "articles";

  try {
    // Получаем все документы из базы данных
    const response = await couchdb.get(`/${dbName}/_all_docs?include_docs=true`);
    const articles = response.data.rows as CouchDBArticle[];

    // Фильтруем статьи по subcategory и формируем массив секций
    const sections = articles
      .filter((article) => article.doc?.subcategory === subcategory)
      .map((article) => ({
        label: article.doc.title,
        path: `/${article.doc.category}/${article.doc.subcategory}/${article.doc.slug}`
      }));

    return sections;
  } catch (error) {
    console.error("Ошибка при получении категорий:", error);
    return [];
  }
} 