import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Placeholder } from '@tiptap/extension-placeholder'
import { useEffect } from 'react';
import MenuBar from './MenuBar';

const ExplanationText = ({initialContent, updateContent, updateOrigialContent, setEditorRef}) => {
  const editor = useEditor({
    extensions: [
        StarterKit,
        Placeholder.configure({
            placeholder: "Click Here to start writing explanation..."
        })
    ],
    content: initialContent,
    immediatelyRender: false,
    onUpdate: ({editor}) => {
      const text = editor.getText();
      const html = editor.getHTML();
      updateContent(text);
      updateOrigialContent(html);
    },
    editorProps: {
        attributes: {
            class: "w-full text-[#E5EAF0] bg-[#1D232B] border border-[#2A3038] focus:border-[#3A82F6] focus:outline-none font-inter p-2 rounded h-full text-base"
        }
    }
  });

  useEffect(() => {
    if (editor) {
      setEditorRef(editor);
    }
  }, [editor, setEditorRef])


  return (
    <div className='flex flex-col h-full grow mt-2'>
        <MenuBar editor={editor}/>
        <EditorContent editor={editor} className='w-full p-2 flex grow'/>
    </div>
  )
}

export default ExplanationText