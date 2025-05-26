"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { toast } from "@/components/ui/use-toast"
import { Plus, Pencil, Trash2 } from "lucide-react"

interface EmailTemplate {
  id: number
  name: string
  subject: string
  content: string
  occasion: string
}

export default function EmailTemplatesPage() {
  const [templates, setTemplates] = useState<EmailTemplate[]>([])
  const [isAddingTemplate, setIsAddingTemplate] = useState(false)
  const [newTemplate, setNewTemplate] = useState({
    name: "",
    subject: "",
    content: "",
    occasion: "",
  })

  useEffect(() => {
    fetchTemplates()
  }, [])

  const fetchTemplates = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/email-templates")
      const data = await response.json()
      setTemplates(data)
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch email templates",
        variant: "destructive",
      })
    }
  }

  const handleAddTemplate = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("http://localhost:8080/api/email-templates", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newTemplate),
      })

      if (response.ok) {
        toast({
          title: "Success",
          description: "Email template added successfully",
        })
        setIsAddingTemplate(false)
        setNewTemplate({
          name: "",
          subject: "",
          content: "",
          occasion: "",
        })
        fetchTemplates()
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add email template",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 container mx-auto py-12 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Email Templates</h1>
          <Dialog open={isAddingTemplate} onOpenChange={setIsAddingTemplate}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Add Template
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add New Email Template</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleAddTemplate} className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Template Name</label>
                  <Input
                    value={newTemplate.name}
                    onChange={(e) => setNewTemplate({ ...newTemplate, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Subject</label>
                  <Input
                    value={newTemplate.subject}
                    onChange={(e) => setNewTemplate({ ...newTemplate, subject: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Content</label>
                  <Textarea
                    value={newTemplate.content}
                    onChange={(e) => setNewTemplate({ ...newTemplate, content: e.target.value })}
                    required
                    rows={5}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Occasion</label>
                  <Input
                    value={newTemplate.occasion}
                    onChange={(e) => setNewTemplate({ ...newTemplate, occasion: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Add Template
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <Card key={template.id}>
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>{template.name}</span>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="icon">
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button variant="destructive" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="font-medium">Subject: {template.subject}</p>
                <p className="text-muted-foreground mt-2">{template.content}</p>
                <p className="text-sm text-primary mt-2">Occasion: {template.occasion}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

