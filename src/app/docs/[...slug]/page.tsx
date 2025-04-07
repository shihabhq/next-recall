//[...slug] is naming convention for catch all routes in nextjs
//(slug word is not mandatory)

const Docs = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const { slug } = await params;

  if (slug?.length === 2) {
    return (
      <h1>
        Docs of {slug[0]} of the concept {slug[1]}
      </h1>
    );
  } else if (slug?.length === 1) {
    return <h1>Docs of {slug[0]}</h1>;
  }

  return (
    <div>
      <h1>Docs home page</h1>
    </div>
  );
};

export default Docs;
