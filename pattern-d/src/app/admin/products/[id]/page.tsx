import AdminProductEditForm from "./_form";

export function generateStaticParams() {
  return ["1","2","3","4","5","6","7","8","new"].map((id) => ({ id }));
}

export default function AdminProductEditPage({ params }: { params: { id: string } }) {
  return <AdminProductEditForm isNew={params.id === "new"} />;
}
