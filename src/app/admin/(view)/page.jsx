import { columns } from "@/components/admin/view/columns";
import DataTable from "@/components/admin/view/datatable";
import { GetAllArticles } from "@/lib/actions";

export default async function Page() {
    
  const data = await GetAllArticles();
  return (
    <>
      <DataTable columns={columns} data={data} />
    </>
  );
}
