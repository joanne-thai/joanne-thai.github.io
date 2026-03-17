import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SkillGroupProps {
  title: string;
  skills: string[];
}

export function SkillGroup({ title, skills }: SkillGroupProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="inline-flex rounded-full border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-700"
          >
            {skill}
          </span>
        ))}
      </CardContent>
    </Card>
  );
}
