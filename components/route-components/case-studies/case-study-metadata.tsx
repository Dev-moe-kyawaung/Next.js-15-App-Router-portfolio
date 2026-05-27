import { Smartphone, Calendar, User2 } from "lucide-react";

interface CaseStudyMetadataProps {
  role: string;
  timeline: string;
}

export function CaseStudyMetadata({ role, timeline }: CaseStudyMetadataProps) {
  return (
    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-1">
        <Smartphone className="h-4 w-4" />
        {role}
      </div>
      <div className="flex items-center gap-1">
        <Calendar className="h-4 w-4" />
        {timeline}
      </div>
    </div>
  );
}
