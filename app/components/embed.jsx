export function Embed({ children, ...props }) {
  return (
    <div
      style={{
        margin: '2rem 0',
        width: '100%',
        overflow: 'hidden',
        borderRadius: '12px',
      }}
      {...props}
    >
      {children}
    </div>
  );
}
