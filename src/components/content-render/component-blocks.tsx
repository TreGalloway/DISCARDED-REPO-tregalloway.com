import {
    NotEditable,
    component,
    fields,
} from '@keystone-6/fields-document/component-blocks'

import { Title, Text, Code, Blockquote } from '@mantine/core'
import { Prism } from '@mantine/prism'

export const componentBlocks = {
    quote: component({
        preview: (props) => {
            const citation = props.fields.attribution
            return (
                <Blockquote color={'teal'} cite="">
                    {props.fields.attribution.element}
                </Blockquote>
            )
        },
        label: 'Quote',
        schema: {
            content: fields.child({
                kind: 'block',
                placeholder: 'Quote...',
                formatting: { inlineMarks: 'inherit', softBreaks: 'inherit' },
                links: 'inherit',
            }),
            attribution: fields.child({
                kind: 'inline',
                placeholder: 'Attribution...',
            }),
        },
        chromeless: true,
    }),
    // code: component({
    //     preview: (props) => {
    //         return (
    //             <Prism language="tsx">{props.fields.content}</Prism>
    //         )
    //     },
    //     label: 'Code',
    //     schema: {
    //         content: fields.child({
    //             kind: 'block',
    //             placeholder: 'Code...',
    //             formatting: { inlineMarks: 'inherit', softBreaks: 'inherit' },
    //         }),
    //         attribution: fields.child({
    //             kind: 'inline',
    //             placeholder: 'Attribution...',
    //         }),
    //     },
    //     chromeless: true,
    // }),
}
