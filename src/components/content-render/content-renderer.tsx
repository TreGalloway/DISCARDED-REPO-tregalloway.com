import {
    DocumentRenderer,
    DocumentRendererProps,
} from '@keystone-6/document-renderer'

const renderers: DocumentRendererProps['renderers'] = {
    // use your editor's autocomplete to see what other renderers you can override
    inline: {
        bold: ({ children }) => {
            return <strong>{children}</strong>
        },
    },
    block: {
        paragraph: ({ children, textAlign }) => {
            return <p style={{ textAlign }}>{children}</p>
        },
    },
}

export function PostRenderer({ document }: DocumentRendererProps) {
    return <DocumentRenderer document={document} />
}
