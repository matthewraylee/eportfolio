// src/components/layout/Header.tsx
export default function Header() {
  return (
    <header className="w-full py-4 border-b">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="font-bold text-xl">Your Name</div>
        {/* Navigation will be integrated here */}
      </div>
    </header>
  );
}
