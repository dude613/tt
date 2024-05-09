import Schools from "@/components/dashboard/schools/Schools";


const page = async () => {
  // const session = await getServerSession(authOptions);
  // const user = session?.user;

  return (
    <div className="container">
      <h1 className="text-center text-3xl font-semibold">Schools</h1>
      <br />

      <Schools  />
    </div>
  );
};

export default page;
