import { comments } from "../data";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const comment = comments.find((obj) => obj.id === parseInt(id));
  if (!comment) {
    return new Response("Comment not found", { status: 404 });
  }
  return Response.json(comment);
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const updatedContent = await request.json();
  const comment = comments.find((obj) => obj.id === parseInt(id));
  if (!comment) {
    return new Response("Comment not found", { status: 404 });
  }
  const newComment = {
    ...comment,
    ...updatedContent,
  };
  const index = comments.findIndex((comment) => comment.id === parseInt(id));
  comments[index] = newComment;
  return Response.json(newComment, {
    status: 200,
  });
}

export async function DELETE(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const index = comments.findIndex((comment) => comment.id === parseInt(id));
  if (index < 0) {
    return new Response("Comment not found", { status: 404 });
  }
  const deletedComment = comments[index];
  comments.splice(index, 1);
  return Response.json(deletedComment, { status: 200 });
}
