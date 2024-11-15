import Navbar from "@/components/navbar";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16font-[family-name:var(--font-geist-sans)] bg-custombg">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"></main>
      <Navbar />
      <video
        id="my-player"
        className="video-js"
        controls
        preload="auto"
        poster="https://m.media-amazon.com/images/M/MV5BNWFkMThiODEtNzdkMi00ZDczLWIwMzktYTFmNjM1M2YxZjU5XkEyXkFqcGc@._V1_QL75_UX820_.jpg"
        data-setup="{}"
      >
        <source src="videos/ey.mp4" type="video/mp4"></source>
        <source src="videos/ey.mp4" type="video/webm"></source>
        <source src="videos/ey.mp4" type="video/ogg"></source>
      </video>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
