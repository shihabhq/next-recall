export const dynamic = "force-dynamic"; //this is to enable caching
export const revalidate = 10; //revalidate every 10 seconds

export async function GET() {
  return Response.json({ time: new Date().toLocaleTimeString() });
}
