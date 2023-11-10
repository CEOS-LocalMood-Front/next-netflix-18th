import dynamic from "next/dynamic";

export default function Home() {
  const Logo = dynamic(() => import("./components/LandingNetflix"));
  return (
    <div className="w-full h-full bg-background-main flex justify-center items-center">
      <Logo />
    </div>
  );
}
