type SiteFrameProps = {
  src: string;
};

export function SiteFrame({ src }: SiteFrameProps) {
  return (
    <main className="site-frame-shell">
      <iframe
        key={src}
        className="site-frame"
        src={src}
        title="Frontier Transport"
        allow="fullscreen"
      />
    </main>
  );
}
