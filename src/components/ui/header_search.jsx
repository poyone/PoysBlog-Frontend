import { useEffect, useRef } from "react";

export default function Search() {
  const inputRef = useRef(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "/" && document.activeElement !== inputRef.current) {
        event.preventDefault();
        inputRef.current.focus();
      } else if (event.key === "Escape") {
        if (document.activeElement === inputRef.current) {
          inputRef.current.blur();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <label className="h-10 w-auto pl-4 pr-2 bg-base-200 flex items-center gap-2 border-b border-slate-200">
      <input
        ref={inputRef}
        type="text"
        className="my-input w-14 italic text-black font-light focus:md:w-28 bg-base-200 outline-none transition-width duration-300 ease-in-out "
        placeholder="Search"
      />
      <kbd className="pointer-events-none right-[0.3rem] top-[0.3rem] hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
        /
      </kbd>
    </label>
  );
}
