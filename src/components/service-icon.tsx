import { Code2, CloudCog, Compass, ShieldCheck, Cpu, LifeBuoy } from "lucide-react";
import type { ServiceIcon } from "@/lib/services-data";

const icons = {
  code: Code2,
  cloud: CloudCog,
  compass: Compass,
  shield: ShieldCheck,
  cpu: Cpu,
  lifebuoy: LifeBuoy,
};

export function ServiceIconGlyph({
  icon,
  size = 22,
  className,
}: {
  icon: ServiceIcon;
  size?: number;
  className?: string;
}) {
  const Icon = icons[icon];
  return <Icon size={size} className={className} />;
}
