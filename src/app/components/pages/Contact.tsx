import { Card, CardContent } from "@/Uicomponents/ui/card";
import Image from "next/image";
import { Button } from "@/Uicomponents/ui/button";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
      <h1 className="text-4xl font-bold text-center">
        Connect With <span className="text-orange-500">Us</span>
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mt-4">
        Join our growing community and stay updated with the latest
        opportunities and insights. Follow us on social media and become part of
        The Student Spot family.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 w-full max-w-5xl">
        {[
          { title: "WhatsApp Community", emoji: "💬" },
          { title: "LinkedIn", emoji: "💼" },
          { title: "YouTube", emoji: "📽️" },
          { title: "Instagram", emoji: "📸" },
        ].map((item) => (
          <Card key={item.title} className="text-center py-6">
            <CardContent className="flex flex-col items-center justify-center">
              <div className="text-3xl mb-2">{item.emoji}</div>
              <p className="text-lg font-medium text-gray-800">{item.title}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-12 max-w-xl w-full">
        <CardContent className="flex flex-col items-center py-8">
          <h2 className="text-xl font-bold mb-4">Meet Our Founder</h2>
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
            <Image
              src="/founder.jpg"
              alt="Founder"
              width={96}
              height={96}
              className="object-cover w-full h-full"
            />
          </div>
          <p className="text-center text-gray-600 max-w-sm mb-4">
            Connect with our CEO & Founder to learn more about The Student
            Spot's mission and vision.
          </p>
          <Button className="bg-red-600 hover:bg-red-700 text-white">
            Connect with the Founder
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
