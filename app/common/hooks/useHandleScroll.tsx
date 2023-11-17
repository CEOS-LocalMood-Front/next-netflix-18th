import { useEffect, useState } from "react";

export default function useHandleScroll() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;

      if (currentPosition >= 200) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { scroll };
}
