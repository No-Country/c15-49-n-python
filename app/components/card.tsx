export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-2 m-4 rounded-md px-5 w-64 h-64">{children}</div>
  );
}
