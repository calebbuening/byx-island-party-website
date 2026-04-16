export default function Playlist() {
  return (
    <section id="playlist" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#1a1403]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#cfb358] text-xs uppercase tracking-[0.3em] mb-3">
            Get In The Mood
          </p>
          <h2
            className="text-6xl sm:text-7xl lg:text-8xl text-[#f5f0e8]"
            style={{ fontFamily: "var(--font-bebas, Impact, sans-serif)" }}
          >
            The Playlist
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-[#cfb358]" />
        </div>

        <div className="rounded-lg overflow-hidden border border-[#cfb358]/20 bg-black">
          <iframe
            src="https://open.spotify.com/embed/playlist/6nQIAhP5bUJxNDMGvtNYkw?utm_source=generator&theme=0"
            width="100%"
            height="452"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="block"
          />
        </div>
      </div>
    </section>
  );
}
