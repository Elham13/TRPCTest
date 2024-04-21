import { Button } from "@/components/ui/button";
import Page from "@/components/wrappers/Page";
import Link from "next/link";

export default function Home() {
  return (
    <Page>
      <div className="py-12 flex flex-col items-center justify-center gap-y-8">
        <h1 className="text-3xl font-bold">Welcome to Cyrus Groups</h1>
        <Button className="mt-8">
          <Link href="/water-purifier">Start with Water Purifier</Link>
        </Button>
      </div>
    </Page>
  );
}
