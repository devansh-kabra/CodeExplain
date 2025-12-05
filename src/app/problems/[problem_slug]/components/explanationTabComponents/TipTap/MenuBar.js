import { useEditorState } from "@tiptap/react";
//menu bar is in last

const BoldButton = ({ editor }) => {
    const { isBoldActive } = useEditorState({
        editor,
        selector: ({ editor: instance }) => ({
            isBoldActive: instance.isActive('bold')
        }),
    });

    return (
        <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={isBoldActive ? 'is-active' : ''}
            title='Bold (Ctrl+B)'
        >
            B
        </button>
    )
}

const ItalicButton = ({editor}) => {
    const { isItalicActive } = useEditorState({
        editor, 
        selector: ({editor: instance}) => ({
            isItalicActive: instance.isActive('italic')
        }),
    });

    return (
        <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={isItalicActive ? 'is-active' : ''}
            title='Italic (Ctrl+I)'
        >
            I
        </button>
    )
}

const BulletList = ({editor}) => {
    const { isBulletListActive } = useEditorState({
        editor, 
        selector: ({editor: instance}) => ({
            isBulletListActive: instance.isActive('bulletList')
        }),
    });

    return (
        <button
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={isBulletListActive ? 'is-active' : ''}
            title='Bullet List'
        >
            •
        </button>
    )
}

const NumberedList = ({editor}) => {
    const { isNumberedListActive } = useEditorState({
        editor, 
        selector: ({editor: instance}) => ({
            isNumberedListActive: instance.isActive('orderedList')
        }),
    });

    return (
        <button
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={isNumberedListActive ? 'is-active' : ''}
            title='Numbered List'
        >
            1
        </button>
    )
}

const Code = ({editor}) => {
    const { isCodeActive } = useEditorState({
        editor, 
        selector: ({editor: instance}) => ({
            isCodeActive: instance.isActive('code')
        }),
    });

    return (
        <button
            onClick={() => editor.chain().focus().toggleCode().run()}
            className={isCodeActive ? 'is-active' : ''}
            title='Code'
        >
            Code
        </button>
        
    )
}

const MenuBar = ({ editor }) => {
    if (!editor) {return null;}

  
  return (
    <div className="control-group">
        <div className="button-group">
            <BoldButton editor={editor}/>
            <ItalicButton editor={editor}/>
            <BulletList editor={editor}/>
            <NumberedList editor={editor}/>
            <Code editor={editor} />
        </div>
    </div>
  )
}

export default MenuBar;