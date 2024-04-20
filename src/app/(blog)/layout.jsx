import Header from "@/components/blog/header";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen flex-col">
      <Header />
      <div>{children}</div>
    </div>
  );
}
