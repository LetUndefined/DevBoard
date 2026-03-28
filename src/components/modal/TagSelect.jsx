import React from "react";
import { useState } from "react";
const TagSelect = () => {
  const [tags, setTags] = useState([]);
  const [inputValue, setValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      e.preventDefault();
      setTags([...tags, inputValue.trim()]);
      setValue("");
    }
  };

  const handleRemoveTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };
  return (
    <>
      <div className="flex flex-wrap gap-2 mb-2">
        {tags.map((tags, index) => {
          return (
            <span key={index} className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2">
              {tags}
              <button onClick={() => handleRemoveTag(index)} className="hover:text-red-200">
                x
              </button>
            </span>
          );
        })}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setValue(e.target.value)}
        className="border border-[var(--main-border)] w-full outline-none p-2 rounded-md placeholder-[var(--color-dg)] text-[var(--color-dw)] pl-2"
        placeholder="Type and press Enter to add tags..."
        onKeyDown={handleKeyDown}
      />
    </>
  );
};

export default TagSelect;
