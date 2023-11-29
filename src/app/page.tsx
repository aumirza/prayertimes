import Widget from "@/components/Widget";
import { getPrayerTimes } from "@/utils/getPrayerTimes";

export default async function Home() {
  const latitude = "25.754900";
  const longitude = "82.687060";
  const place = "Jaunpur";
  const data = await getPrayerTimes({
    latitude,
    longitude,
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <Widget data={{ ...data, place }} />
    </main>
  );
}
