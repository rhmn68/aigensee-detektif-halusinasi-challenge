import React, { useEffect, useRef } from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

interface TutorialModalProps {
  onContinue: () => void;
}

export function TutorialModal({ onContinue }: TutorialModalProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    headingRef.current?.focus();
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-4 animate-fadeIn">
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="tutorial-title"
        className="w-full max-w-3xl max-h-[92dvh] overflow-y-auto rounded-3xl border-2 border-[#1f568d] bg-[#041a32] p-4 sm:p-6"
      >
        <div className="flex items-center gap-3 mb-3">
          <PlayCircle className="w-7 h-7 shrink-0 text-[#f0c400]" />
          <h2 ref={headingRef} tabIndex={-1} id="tutorial-title" className="font-title text-lg sm:text-xl text-[#f0c400] uppercase tracking-wide outline-none">
            Video Tutorial Investigasi
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-[#c8d5e3] mb-4">
          Tonton tutorial berikut untuk memahami cara bermain sebelum memulai investigasi.
        </p>
        <div className="aspect-video overflow-hidden rounded-xl border border-[#1f568d] bg-black">
          <iframe
            className="w-full h-full"
            src="https://www.youtube-nocookie.com/embed/V2aN2Zk3t7s"
            title="Video tutorial Detektif Halusinasi"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
          <a href="https://youtu.be/V2aN2Zk3t7s" target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-[#8fabc6] hover:text-white underline underline-offset-4">
            Buka di YouTube
          </a>
          <button type="button" onClick={onContinue} className="flex items-center gap-2 rounded-xl bg-[#f0c400] hover:bg-[#ffd21a] px-4 py-2.5 font-title text-xs sm:text-sm text-black uppercase tracking-wide cursor-pointer active:scale-95 transition-all">
            Lanjut ke Investigasi
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
