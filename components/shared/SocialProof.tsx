import Image from "next/image";

const avatars = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
];

const SocialProof = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <div className="flex -space-x-3">
        {avatars.map((avatar, index) => (
          <Image
            key={index}
            src={avatar}
            alt={`Customer ${index + 1}`}
            width={40}
            height={40}
            className="w-10 h-10 rounded-full border-2 object-cover"
            style={{ borderColor: "#FFFFFF" }}
          />
        ))}
      </div>
      <p className="text-sm font-medium" style={{ color: "#1F2937" }}>
        Trusted by 50,000+ Canadians
      </p>
    </div>
  );
};

export default SocialProof;
