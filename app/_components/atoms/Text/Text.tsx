interface TextProps {
  children: React.ReactNode;
  as?: 'p' | 'span' | 'label' | 'small';
  className?: string;
}

export default function Text({ children, as: Tag = 'p', className = '' }: TextProps) {
  return <Tag className={className}>{children}</Tag>;
}
