import { NextRequest } from "next/server";
import { comments } from "./data";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const query = searchParams.get("query");
  const requestHeaders = new Headers(request.headers);
  console.log(requestHeaders.get("user-agent"));
  if (query) {
    const filteredComments = comments.filter((comment) =>
      comment.comment.toLowerCase().includes(query.toLowerCase())
    );
    if (filteredComments.length === 0) {
      return new Response("No comments found", { status: 404 });
    }
    return Response.json(filteredComments);
  }
  return Response.json(comments);
}

export async function POST(request: Request) {
  const data = await request.json();
  const newComment = {
    id: comments.length + 1,
    comment: data.comment,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    status: 201,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
