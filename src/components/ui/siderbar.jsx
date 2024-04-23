"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export function SidebarNav({ className, items, ...props }) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      // 清除客户端的登录状态和 token
      localStorage.removeItem("token");

      // 重定向到登录页面
      router.push("/login");
    } catch (error) {
      console.error("退出登录失败:", error);
    }
  };

  return (
    <nav
      className={cn(
        "flex space-x-2 sm:flex-col lg:flex-col lg:space-x-0 lg:space-y-1 relative",
        className
      )}
      {...props}
    >
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            pathname === item.href
              ? "bg-muted hover:bg-muted"
              : "hover:bg-transparent hover:underline",
            "justify-start"
          )}
        >
          {item.title}
        </Link>
      ))}
      <Button variant="ghost" className=" justify-start absolute bottom-10 w-full" onClick={handleLogout}>Log Out</Button>
    </nav>
  );
}
