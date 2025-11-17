"use client";

import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

export function TextEditor() {
  const editor = useEditor({
    extensions: [StarterKit, Document, Paragraph, Text],
    content: "<p>Hello World! 🌎️</p>",
    autofocus: true,
    editable: true,
    editorProps: {
      attributes: {
        class:
          "prose prose-sm sm:prose lg:prose-lg xl:prose-2xl m-4 focus:outline-none w-full min-h-[150px] w-full bg-red-500 rounded-md",
      },
    },
    // Don't render immediately on the server to avoid SSR issues
    immediatelyRender: false,
  });

  return <EditorContent editor={editor} />;
}
