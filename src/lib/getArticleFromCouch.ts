import { couchdb } from "./couchdbClient";

export async function getArticleFromCouch(subcategory: string, slug: string) {
  const dbName = "articles"; // имя базы данных в CouchDB

  try {
    const response = await couchdb.get(`/${dbName}/${slug}`);
    const data = response.data;

    return {
      title: data.title || slug,
      content: data.content || "",
    };
  } catch (error) {
    console.error("Ошибка при получении статьи:", error);
    return {
      title: "Статья не найдена",
      content: "",
    };
  }
}