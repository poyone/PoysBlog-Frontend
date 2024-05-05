import AdminMenu from "@/components/admin/menu";

export default async function AdminLayout({children}) {
  return (
    <div className="relative">
      <AdminMenu />
      {children}
    </div>
  );
}
