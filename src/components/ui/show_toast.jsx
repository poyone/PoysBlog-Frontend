// ui/use_show_toast.js
import { useToast } from "./use-toast";

export default function useShowToast() {
  const { toast } = useToast();

  function showToast(title, detail, isSuccess) {
    const bgColor = isSuccess ? "bg-green-100" : "bg-red-100";
    const textColor = isSuccess ? "text-green-800" : "text-red-800";

    toast({
      title: title,
      description: (
        <pre className={`mt-2 w-[340px] rounded-md ${bgColor} p-4`}>
          <code className={`${textColor} text-wrap`}>
            {JSON.stringify(detail, null, 2)}
          </code>
        </pre>
      ),
    });
  }

  return showToast;
}