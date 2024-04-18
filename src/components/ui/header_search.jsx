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
    <label className="h-10 w-auto pl-4 pr-2 bg-base-200 rounded-lg flex items-center gap-2 ">
      <input
        ref={inputRef}
        type="text"
        className="my-input w-14 focus:md:w-28 bg-base-200 outline-none transition-width duration-300 ease-in-out "
        placeholder="Search"
      />
      <kbd className="kbd kbd-sm bg-base-100 border font-semibold">/</kbd>
    </label>
  );
}
