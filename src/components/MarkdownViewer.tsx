import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import dracula from 'react-syntax-highlighter/dist/esm/styles/prism/dracula';
import Image from 'next/image';

export default function MarkdownViewer({ content }: { content: string }) {
  const markdown = `asd`;
  return (
    <Markdown
      className='prose lg:prose-xl'
      remarkPlugins={[remarkGfm]}
      components={{
        code({ ref, children, className, node, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return match ? (
            <SyntaxHighlighter
              language={match[1]}
              PreTag='div'
              {...props}
              style={dracula}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code {...props}>{children}</code>
          );
        },
        img: (image) => (
          <Image
            className='w-full max-h-60 object-cover'
            src={image.src || ''}
            alt={image.alt || ''}
            width={500}
            height={350}
          />
        ),
      }}
    >
      {content}
    </Markdown>
  );
}
