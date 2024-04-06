import { ImageBox } from "@/components/image-box";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-5 py-24 md:p-24 overflow-x-hidden">
      <div className="text-center mt-8">
        <h1 className="scroll-m-20 mb-4 text-3xl md:text-4xl font-extrabold tracking-tight lg:text-5xl">
          <span className="gradient-text">{siteConfig.name}</span> - Plant
          Health Monitoring System
        </h1>

        <div className="frame-containers flex flex-wrap items-center justify-evenly rounded shadow-lg  p-10 ">
          <div className="frame-card min-w-fit">
            <h1 className="text-center text-green-400">Temperature Graph</h1>
            <iframe
              height={300}
              width={500}
              src="https://thingspeak.com/channels/2473517/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=.&type=line"
            ></iframe>
          </div>
          <div className="frame-card min-w-fit">
            <h1 className="text-center text-green-400">Humidity Graph</h1>
            <iframe
              height={300}
              width={500}
              src="https://thingspeak.com/channels/2473517/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=.&type=line"
            ></iframe>
          </div>
          <div className="frame-card">
            <h1 className="text-center text-green-400">Soil Moisture Graph</h1>
            <iframe
              height={300}
              width={500}
              src="https://thingspeak.com/channels/2473517/charts/4?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=.&type=line"
            ></iframe>
          </div>
          <div className="frame-card">
            <h1 className="text-center text-green-400">Pressure Graph</h1>
            <iframe
              height={300}
              width={500}
              src="https://thingspeak.com/channels/2473517/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&title=.&type=line"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
