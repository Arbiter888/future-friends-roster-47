import { Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import SubscriptionButton from "@/components/SubscriptionButton";

const PremiumFeatures = () => {
  return (
    <Card className="bg-white shadow-lg">
      <CardHeader className="text-center">
        <CardTitle>Join Our Mission</CardTitle>
        <CardDescription>
          Help us expand our reach and bring the Christian faith to more people through enhanced tools and resources
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-semibold text-center">Your contribution helps us achieve:</h4>
            <ul className="space-y-2">
              {[
                "More Bible study sessions for every user",
                "A larger and more capable ministry team",
                "Expanded priority prayer support",
                "Better study tools and advanced resources",
                "Deeper, personalized spiritual guidance"
              ].map((feature, i) => (
                <li key={i} className="flex items-center justify-center gap-2 text-gray-600">
                  <Star className="w-4 h-4 text-[#0EA5E9]" /> {feature}
                </li>
              ))}
            </ul>
          </div>
          <p className="text-sm text-gray-500 italic text-center">
            Be a part of something greater and help us spread faith, hope, and love to more people
          </p>
          <SubscriptionButton />
        </div>
      </CardContent>
    </Card>
  );
};

export default PremiumFeatures;