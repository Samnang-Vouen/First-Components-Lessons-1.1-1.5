import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

function ProjectCard({ title, description, status, statusVariant = 'default', href }) {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between gap-2">
          <CardTitle>{title}</CardTitle>
          <Badge variant={statusVariant}>{status}</Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-700">{description}</p>
      </CardContent>
      <CardFooter>
        <Button render={<a href={href} target="_blank" rel="noreferrer" />}>
          View project
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ProjectCard
