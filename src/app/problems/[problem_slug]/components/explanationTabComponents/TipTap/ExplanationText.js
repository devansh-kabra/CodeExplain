'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { Placeholder } from '@tiptap/extension-placeholder'

//css
import MenuBar from './MenuBar';

const ExplanationText = () => {
  const editor = useEditor({
    extensions: [
        StarterKit,
        Placeholder.configure({
            placeholder: "Click Here to start writing explanation..."
        })
    ],
    content: '',
    immediatelyRender: false,
    editorProps: {
        attributes: {
            class: "w-full text-[#E5EAF0] bg-[#1D232B] border border-[#2A3038] focus:border-[#3A82F6] focus:outline-none font-inter p-2 rounded h-full text-base"
        }
    }
  })

  return (
    <div className='flex flex-col h-full'>
        <MenuBar editor={editor}/>
        <EditorContent editor={editor} className='w-full p-2 flex justify-center items-center grow'/>
    </div>
  )
}

export default ExplanationText