import { SidebarNav } from "@/components/ui/siderbar";

export default function Layout({ children }) {
  const sidebarNavItems = [
    {
      title: "View",
      href: "/admin",
    },
    {
      title: "Upload",
      href: "/admin/upload",
    },
    {
      title: "Edit",
      href: "/admin/edit",
    }, 
    {
      title: "Log",
      href: "/admin/log",
    },
  ];

  return (
    <div className="flex m-4 px-4 md:min-h-[545px] rounded-lg border shadow-xl">
      <SidebarNav className='basis-1/5 mt-8' items={sidebarNavItems} />
      <div className="mt-8">{children}</div>
    </div>
  );
}
