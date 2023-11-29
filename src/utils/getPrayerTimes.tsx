const base = "http://api.aladhan.com/v1/timings/";

export const getPrayerTimes = async ({
  latitude,
  longitude,
}: {
  latitude: string;
  longitude: string;
}) => {
  const params: {} = {
    latitude,
    longitude,
    method: "1", //1 - University of Islamic Sciences, Karachi
    //   Imsak: 0,
    //   Fajr: 0,
    //   Sunrise: 0,
    //   Dhuhr: 0,
    //   Asr: 0,
    //   Maghrib: 0,
    //   Sunset: 0,
    //   Isha: 0,
    //   Midnight: 0,
    tune: "0,-2,-2, -1,0,1,1,0,0",
  };
  const paramsToUrlString: string = new URLSearchParams(params).toString();
  const date = new Date().toLocaleDateString("es-CL");
  const url = base + date + "?" + paramsToUrlString;
  const res = await fetch(url);
  const json = await res.json();

  const timings = json.data.timings;
  const dateReadable = {
    georgian: json.data.date.readable,
    hijri: {
      en: [
        json.data.date.hijri.month.number,
        json.data.date.hijri.month.en,
        json.data.date.hijri.year,
      ].join(" "),
      ar: [
        json.data.date.hijri.month.number,
        json.data.date.hijri.month.en,
        json.data.date.hijri.year,
      ].join(" "),
    },
  };

  return { timings, dateReadable };
};
