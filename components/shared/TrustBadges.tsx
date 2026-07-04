import { Shield, Clock, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const badges = [
  { icon: Shield, label: "256-bit SSL Secured" },
  { icon: Clock, label: "Funds in 24 Hours" },
  { icon: CheckCircle2, label: "Any Credit Accepted" },
];

const TrustBadges = () => {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {badges.map(({ icon: Icon, label }) => (
        <Badge
          key={label}
          variant="outline"
          className="h-7 gap-1.5 px-3 text-sm font-normal"
          style={{ borderColor: "#E2E8F0", color: "#1F2937" }}
        >
          <Icon className="w-3.5 h-3.5" style={{ color: "#10B981" }} />
          {label}
        </Badge>
      ))}
    </div>
  );
};

export default TrustBadges;
