import {columns} from "@/components/admin/view/columns"
import DataTable from "@/components/admin/view/datatable";

export default async function Page() {
    const response = await fetch('http://127.0.0.1:2333/admin/articles',{ cache: 'no-store' })
    const data = await response.json();  

    return (
        <>
            <DataTable columns={columns} data={data} />
        </>
    )
}