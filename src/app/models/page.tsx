import { ImageBox } from "@/components/image-box";
import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-5 py-24 md:p-24 overflow-x-hidden">
      <div className="text-center mt-16">
        <h1 className="scroll-m-20 text-3xl md:text-4xl font-extrabold tracking-tight lg:text-5xl">
          <span className="gradient-text">{siteConfig.name}</span> - Echo3D
          Models
        </h1>
        <div className="frame-container">
          <iframe
            src="https://go.echo3d.co/fB11"
          >
            
          </iframe>
          <iframe
            src="https://go.echo3d.co/Wzgx"
          ></iframe>
          <iframe
            src="https://go.echo3d.co/arJa"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
