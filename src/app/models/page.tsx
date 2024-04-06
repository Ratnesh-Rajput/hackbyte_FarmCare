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
            src="https://api.echo3d.com/webar?key=calm-smoke-0106&entry=0a973aea-911a-4b73-932a-c09bb7bf61ab"
          ></iframe>
          <iframe
            src="https://api.echo3d.com/webar?key=calm-smoke-0106&entry=9453f35d-cdc5-4454-b0ea-5c766116107e"
          ></iframe>
          <iframe
            src="https://api.echo3d.com/webar?key=calm-smoke-0106&entry=0ead74a2-8bf0-4488-a44f-ebb8d63608c1"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
