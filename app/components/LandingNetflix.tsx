"use client";

import Lottie from "react-lottie-player";
import { netflix } from "../common/assets";
import { useRouter } from "next/navigation";

export default function LandingNetflix() {
  const router = useRouter();
  return (
    <Lottie
      animationData={netflix}
      loop={false}
      play
      onComplete={() => router.push("/main")}
    />
  );
}
