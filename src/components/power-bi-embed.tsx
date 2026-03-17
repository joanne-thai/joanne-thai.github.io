import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface PowerBIEmbedProps {
  title: string;
  embedUrl: string;
}

export function PowerBIEmbed({ title, embedUrl }: PowerBIEmbedProps) {
  if (!embedUrl.startsWith("http")) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Power BI Report</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex aspect-[16/10] items-center justify-center rounded-[24px] border border-dashed border-zinc-300 bg-zinc-50 p-8 text-center text-sm leading-6 text-zinc-500">
            Add a public Power BI embed URL in the portfolio data file to display the live report here.
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="surface-card overflow-hidden p-3">
      <div className="aspect-[16/10] overflow-hidden rounded-[22px] border border-zinc-200 bg-zinc-50">
        <iframe
          title={title}
          src={embedUrl}
          loading="lazy"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    </div>
  );
}
