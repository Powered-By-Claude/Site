import Image from "next/image";
import logo from "@/assets/logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src={logo}
      alt="The Handoff"
      className={className}
      priority
    />
  );
}
