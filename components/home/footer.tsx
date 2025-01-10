export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-tarot-purple to-tarot-teal py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">めちゃんこタロット</h2>
          <p className="text-white/90">AIが導く、あなたの運命の道筋</p>
        </div>
        <div className="text-sm text-white/70">
          <p>&copy; {new Date().getFullYear()} めちゃんこタロット All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}