import { useEditorState } from "@tiptap/react";
import { BoldIcon, ItalicIcon, ListBulletIcon, NumberedListIcon, CodeBracketIcon, TrashIcon } from "@heroicons/react/24/solid";
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
            <BoldIcon className="h-4 w-4"/>
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
            <ItalicIcon className="h-4 w-4"/>
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
            <ListBulletIcon className="h-4 w-4"/>
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
            <NumberedListIcon className="h-4 w-4"/>
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
            <CodeBracketIcon className="h-4 w-4"/>
        </button>
        
    )
}

const Clear = ({editor}) => {
    return (
        <button
            onClick={() => editor.commands.clearContent()}
            title='Clear'
        >
            <TrashIcon className="h-4 w-4"/>
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
            <Clear editor={editor} />
        </div>
    </div>
  )
}

export default MenuBar;