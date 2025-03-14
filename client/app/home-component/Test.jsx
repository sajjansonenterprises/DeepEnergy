"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import { useState } from "react";

export default function Test() {
  const [content, setContent] = useState("");

  const editor = useEditor({
    extensions: [StarterKit, Bold, Italic, Underline, Link, Image],
    content,
    onUpdate: ({ editor }) => {
      setContent(editor.getHTML());
    },
  });

  if (!editor) {
    return <p>Loading editor...</p>;
  }

  return (
    <div className="p-4 max-w-3xl mx-auto">
      {/* Toolbar */}
      <div className="flex gap-2 border-b p-2">
        <button onClick={() => editor.chain().focus().toggleBold().run()} className="px-3 py-1 border rounded">
          Bold
        </button>
        <button onClick={() => editor.chain().focus().toggleItalic().run()} className="px-3 py-1 border rounded">
          Italic
        </button>
        <button onClick={() => editor.chain().focus().toggleUnderline().run()} className="px-3 py-1 border rounded">
          Underline
        </button>
        <button
          onClick={() => {
            const url = prompt("Enter image URL");
            if (url) editor.chain().focus().setImage({ src: url }).run();
          }}
          className="px-3 py-1 border rounded"
        >
          Image
        </button>
      </div>
      {/* Editor */}
      <EditorContent editor={editor} className="border p-4 mt-2 min-h-[300px]" />
      {/* Output */}
      <div className="mt-4 p-2 border rounded">
        <h3 className="text-lg font-semibold">HTML Output:</h3>
        <div className="p-2 bg-gray-100 rounded text-sm">{content}</div>
      </div>
    </div>
  );
}
