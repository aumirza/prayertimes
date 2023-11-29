"use Client";

interface Props {
  timings: {
    Imsak: string;
    Fajr: string;
    Sunrise: string;
    Dhuhr: string;
    Asr: string;
    Maghrib: string;
    Sunset: string;
    Isha: string;
    Midnight: string;
  };
  date: {
    georgian: string;
    hijri: {
      en: string;
      ar: string;
    };
  };
  place: string;
}

export default function NamazTimes({ timings, date, place }: Props) {
  return (
    <div>
      <h1 className="text-xl font-bold">{date.georgian}</h1>
      <h1 className="text-xl font-bold">{date.hijri.en}</h1>
      <h2 className="text-lg">Place: {place}</h2>

      <div className="flex items-center justify-between my-5 relative">
        <div className="text-yellow-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-10 h-10"
          >
            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
          </svg>
          {timings.Sunrise}
        </div>
        <div className="w-full h-20 border-t-4 border-dotted border-gray-500 rounded-[90%]"></div>
        <div className="text-blue-400">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-10 h-10"
          >
            <path
              fillRule="evenodd"
              d="M 12 2.25 a 0.75 0.75 0 0 1 0.75 0.75 v 2.25 a 0.75 0.75 0 0 1 -1.5 0 V 3 a 0.75 0.75 0 0 1 0.75 -0.75 z M 7.5 12 a 4.5 4.5 0 1 1 9 0 a 4.5 4.5 0 0 1 -9 0 z z M 21.75 12 a 0.75 0.75 0 0 1 -0.75 0.75 h -2.25 a 0.75 0.75 0 0 1 0 -1.5 H 21 a 0.75 0.75 0 0 1 0.75 0.75 z z M 12 18 a 0.75 0.75 0 0 1 0.75 0.75 V 21 a 0.75 0.75 0 0 1 -1.5 0 v -2.25 A 0.75 0.75 0 0 1 12 18 z z M 6 12 a 0.75 0.75 0 0 1 -0.75 0.75 H 3 a 0.75 0.75 0 0 1 0 -1.5 h 2.25 A 0.75 0.75 0 0 1 6 12 z z"
              clipRule="evenodd"
            />
          </svg>
          {timings.Sunset}
        </div>
      </div>

      <div className="text-lg font-semibold text-gray-800">
        <div className="text-blue-900">Fajr : {timings.Fajr}</div>
        <div className="text-yellow-400">Dhuhr : {timings.Dhuhr} </div>
        <div className="text-yellow-500">Asr : {timings.Asr} </div>
        <div className="text-yellow-800">Maghrib : {timings.Maghrib} </div>
        <div className="text-blue-950">Isha : {timings.Isha} </div>
        {/* <div className="h-2"></div> */}
        {/* <div>Imsak : {timings.Imsak} </div> */}
        {/* <div>Midnight : {timings.Midnight} </div>
      <div>Firstthird : {timings.Firstthird} </div>
      <div>Lastthird : {timings.Lastthird} </div> */}
      </div>
    </div>
  );
}
