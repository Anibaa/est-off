import { Card, CardContent } from "@/components/ui/card"
import type { Staff } from "@/lib/mock-data"

interface StaffGridProps {
  staff: Staff[]
}

export function StaffGrid({ staff }: StaffGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {staff.map((member) => (
        <Card key={member.id} className="overflow-hidden hover:shadow-lg transition-shadow">
          <div className="relative">
            <img src={member.photo || "/placeholder.svg"} alt={member.name} className="w-full h-48 object-cover" />
          </div>
          <CardContent className="p-4">
            <div className="space-y-3">
              <div>
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-est-rouge font-medium">{member.role}</p>
              </div>
              <p className="text-sm text-muted-foreground">{member.experience}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
