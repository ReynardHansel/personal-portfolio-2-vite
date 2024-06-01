import bgVideo from "../assets/background/portfoliosplashbg1.mp4";

export default function Hero() {
  return (
    <div className="relative flex min-h-screen max-w-[100vw] flex-col items-center justify-center overflow-hidden bg-black bg-opacity-60 text-[clamp(1rem,80vw,2.5rem)] font-bold tracking-widest text-white [text-shadow:_0_0_10px_black]">
      <h1>Hi, I'm Reynard</h1>
      <h2>a UI web designer</h2>
      <video
        autoPlay
        muted
        loop
        playsInline
        className="fixed -z-10 min-h-full min-w-full object-cover"
      >
        <source src={bgVideo} type="video/mp4" />
      </video>
    </div>
  );
}
