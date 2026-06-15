"use client";

export default function PrintCertificateButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="rounded-2xl bg-pink-600 px-8 py-4 font-bold text-white transition hover:bg-pink-500"
    >
      PRINT / SAVE PDF CERTIFICATE
    </button>
  );
}