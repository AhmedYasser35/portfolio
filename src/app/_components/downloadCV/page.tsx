import { Download } from "lucide-react";

export default function DownloadCV() {
  return (
    <a
      href="/Ahmed_Yasser_CV.pdf"
      target="_blank" 
      rel="noopener noreferrer" 
      download="Ahmed_Yasser_CV" 
      className="group relative inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-2xl transition-all hover:opacity-90 active:scale-95 shadow-[0_0_20px_rgba(16,185,129,0.2)]"
    >
      <Download size={20} className="group-hover:animate-bounce" />
      <span className="tracking-tighter uppercase">Download_CV</span>

      <div className="absolute inset-0 bg-linear-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity pointer-events-none" />
    </a>
  );
}
