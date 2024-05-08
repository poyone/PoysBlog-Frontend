
import Header from "@/components/app/header";

export default function BlogLayout({ children }) {
  return (
    <div lang="en">
        <Header />
        {children}
    </div>
  );
}
