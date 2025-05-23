import { Image } from '@imagekit/next';
import { Button } from "@/components/ui/button"
import Link  from "next/link"
import { Heading1 } from 'lucide-react';


export default function Home() {
  return (
      <main className="flex flex-col flex-wrap max-w-[700px] mx-auto my-auto content-center justify-center gap-5">
        <Image
          src="/Graphics/ImageKit_Essentials/ImageKit%20High%20res%20logo.png"
          transformation={[{
            width : "360"
          }]}
          width={180}
          height={38}
          priority
          alt="Imagekit Logo"
          className="mx-auto my-10"
        />

        <h1 className="text-5xl font-bold text-center mb-5">Practical Use of AI and GenAI transformations in ImageKit</h1>
        
        <Button variant="outline" className="px-8 py-8 text-xl bg-white text-black border-gray-500 shrink flex">
          <Link href="/remove-bg-example">Standardized Images (Remove Background)</Link>
        </Button>

        <Button variant="outline" className="px-8 py-8 text-xl bg-white text-black border-gray-500 shrink flex">
          <Link href="/lifestyle-images-example">Changing Product Placement or creating lifestyle images (Change Background)</Link>
        </Button>

        <Button variant="outline" className="px-8 py-8 text-xl bg-white text-black border-gray-500 shrink flex">
          <Link href="/generative-fill-example">Expanding images for different platforms (Generative Fill)</Link>
        </Button>

        <Button variant="outline" className="px-8 py-8 text-xl bg-white text-black border-gray-500 shrink flex">
          <Link href="/create-image-example">Creating images for ads, blogs, OG Images</Link>
        </Button>

        <Button variant="outline" className="px-8 py-8 text-xl bg-white text-black border-gray-500 shrink flex">
          <Link href="/single-ad-creative-example">Single ad creative with overlays</Link>
        </Button>

        <Button variant="outline" className="px-8 py-8 text-xl bg-white text-black border-gray-500 shrink flex">
          <Link href="/ad-creatives-example">Ad Creative Gallery (GenAI + Overlays)</Link>
        </Button>

      </main>
  );
}
