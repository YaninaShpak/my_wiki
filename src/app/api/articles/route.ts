import { NextResponse } from "next/server";
import { couchdb } from "@/lib/couchdbClient"; // axios-инстанс
import { v4 as uuidv4 } from "uuid"; // если slug не указан
import { AxiosError } from "axios";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, slug, category, subcategory, content } = body;

    if (!title || !category || !subcategory || !content) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const articleId = slug?.trim() || uuidv4();

    const newDoc = {
      _id: `${articleId}`,
      title,
      slug: articleId,
      category,
      subcategory,
      content,
      createdAt: new Date().toISOString(),
    };

    // Отправка документа в базу данных "articles"
    const response = await couchdb.put(`/articles/${encodeURIComponent(newDoc._id)}`, newDoc);

    return NextResponse.json({ success: true, id: response.data.id, rev: response.data.rev });
  } catch (error) {
    const err = error as AxiosError;
    console.error("Error saving article:", err.response?.data || err.message);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
