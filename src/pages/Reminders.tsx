import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { ExitButton } from "@/components/Layout/ExitButton";
import { Bell, Plus, Trash2 } from "lucide-react";
import { toast } from "sonner";

interface Reminder {
  id: number;
  eventName: string;
  eventDate: string;
  eventTime: string;
}

export default function Reminders() {
  const [reminders, setReminders] = useState<Reminder[]>([
    {
      id: 1,
      eventName: "Prenatal Checkup",
      eventDate: "2024-07-20",
      eventTime: "09:00",
    },
    {
      id: 2,
      eventName: "Ultrasound Appointment",
      eventDate: "2024-08-15",
      eventTime: "14:30",
    },
    {
      id: 3,
      eventName: "Blood Work",
      eventDate: "2024-07-25",
      eventTime: "11:00",
    },
  ]);

  const [newReminder, setNewReminder] = useState({
    eventName: "",
    eventDate: "",
    eventTime: "",
  });

  const handleAddReminder = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newReminder.eventName || !newReminder.eventDate || !newReminder.eventTime) {
      toast.error("Please fill in all fields");
      return;
    }

    const reminder: Reminder = {
      id: Date.now(),
      eventName: newReminder.eventName,
      eventDate: newReminder.eventDate,
      eventTime: newReminder.eventTime,
    };

    setReminders([...reminders, reminder]);
    setNewReminder({ eventName: "", eventDate: "", eventTime: "" });
    toast.success("Reminder added successfully!");
  };

  const handleDeleteReminder = (id: number) => {
    setReminders(reminders.filter(reminder => reminder.id !== id));
    toast.success("Reminder deleted");
  };

  const formatDateTime = (date: string, time: string) => {
    const dateObj = new Date(`${date}T${time}`);
    return dateObj.toLocaleString();
  };

  return (
    <div className="reminders-container">
      <ExitButton to="/dashboard" />
      
      <div className="w-full max-w-6xl space-y-6">
        <Card className="her-health-card">
          <CardHeader>
            <CardTitle className="her-health-header text-center flex items-center justify-center gap-2">
              <Bell className="w-6 h-6" />
              Reminders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAddReminder} className="space-y-4 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="eventName">Event Name</Label>
                  <Input
                    id="eventName"
                    value={newReminder.eventName}
                    onChange={(e) => setNewReminder({ ...newReminder, eventName: e.target.value })}
                    placeholder="e.g., Prenatal Checkup"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="eventDate">Date</Label>
                  <Input
                    id="eventDate"
                    type="date"
                    value={newReminder.eventDate}
                    onChange={(e) => setNewReminder({ ...newReminder, eventDate: e.target.value })}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="eventTime">Time</Label>
                  <Input
                    id="eventTime"
                    type="time"
                    value={newReminder.eventTime}
                    onChange={(e) => setNewReminder({ ...newReminder, eventTime: e.target.value })}
                  />
                </div>
              </div>

              <Button type="submit" className="her-health-button-primary">
                <Plus className="w-4 h-4 mr-2" />
                Add Reminder
              </Button>
            </form>

            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Event Name</TableHead>
                    <TableHead>Date & Time</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {reminders.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={3} className="text-center text-muted-foreground py-8">
                        No reminders yet. Add your first reminder above.
                      </TableCell>
                    </TableRow>
                  ) : (
                    reminders.map((reminder) => (
                      <TableRow key={reminder.id}>
                        <TableCell className="font-medium">{reminder.eventName}</TableCell>
                        <TableCell>{formatDateTime(reminder.eventDate, reminder.eventTime)}</TableCell>
                        <TableCell className="text-right">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleDeleteReminder(reminder.id)}
                            className="text-destructive hover:text-destructive-foreground hover:bg-destructive"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>

            <div className="mt-4 text-sm text-muted-foreground">
              Total Reminders: {reminders.length}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}