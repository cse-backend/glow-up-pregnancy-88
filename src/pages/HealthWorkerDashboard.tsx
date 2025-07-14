import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExitButton } from "@/components/Layout/ExitButton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Users } from "lucide-react";

export default function HealthWorkerDashboard() {
  // Mock client data - in a real app, this would come from API
  const clientsData = [
    {
      id: 1,
      username: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      contact: "+1-555-0123",
      weight: "65.5",
      dueDate: "2024-12-15",
    },
    {
      id: 2,
      username: "Maria Garcia",
      email: "maria.garcia@email.com",
      contact: "+1-555-0124",
      weight: "58.2",
      dueDate: "2024-11-28",
    },
    {
      id: 3,
      username: "Emily Chen",
      email: "emily.chen@email.com",
      contact: "+1-555-0125",
      weight: "62.8",
      dueDate: "2025-01-10",
    },
    {
      id: 4,
      username: "Lisa Williams",
      email: "lisa.williams@email.com",
      contact: "+1-555-0126",
      weight: "67.1",
      dueDate: "2024-12-05",
    },
  ];

  return (
    <div className="health-worker-container">
      <ExitButton />
      
      <div className="w-full max-w-6xl">
        <Card className="her-health-card">
          <CardHeader>
            <CardTitle className="her-health-header text-center flex items-center justify-center gap-2">
              <Users className="w-6 h-6" />
              Health Worker Dashboard - Client Monitoring
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Username</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Weight (kg)</TableHead>
                    <TableHead>Due Date</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {clientsData.map((client) => (
                    <TableRow key={client.id}>
                      <TableCell className="font-medium">{client.username}</TableCell>
                      <TableCell>{client.email}</TableCell>
                      <TableCell>{client.contact}</TableCell>
                      <TableCell>{client.weight}</TableCell>
                      <TableCell>{client.dueDate}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            <div className="mt-4 text-sm text-muted-foreground">
              Total Clients: {clientsData.length}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}