import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    a: ({ children }) => <a className="text-blue-800 underline">{children}</a>,
    ...components,
  };
}
