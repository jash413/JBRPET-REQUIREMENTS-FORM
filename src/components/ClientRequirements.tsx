import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  Trash2, 
  Upload,
  FileText,
  Image as ImageIcon,
  X
} from "lucide-react";

export interface RequirementItem {
  id: string;
  title: string;
  description: string;
  priority: 'High' | 'Medium' | 'Low';
}

export interface RequirementImage {
  id: string;
  url: string;
  name: string;
  description?: string;
}

interface ClientRequirementsProps {
  title: string;
  description: string;
  requirements: RequirementItem[];
  images: RequirementImage[];
  onTitleChange: (title: string) => void;
  onDescriptionChange: (description: string) => void;
  onRequirementsChange: (requirements: RequirementItem[]) => void;
  onImagesChange: (images: RequirementImage[]) => void;
  readOnly?: boolean;
}

export const ClientRequirements = ({
  title,
  description,
  requirements,
  images,
  onTitleChange,
  onDescriptionChange,
  onRequirementsChange,
  onImagesChange,
  readOnly = false
}: ClientRequirementsProps) => {
  const [dragOver, setDragOver] = useState(false);

  const addRequirement = () => {
    const newRequirement: RequirementItem = {
      id: `req_${Date.now()}`,
      title: "New Requirement",
      description: "",
      priority: "Medium"
    };
    onRequirementsChange([...requirements, newRequirement]);
  };

  const updateRequirement = (id: string, field: keyof RequirementItem, value: any) => {
    const updated = requirements.map(req => 
      req.id === id ? { ...req, [field]: value } : req
    );
    onRequirementsChange(updated);
  };

  const removeRequirement = (id: string) => {
    onRequirementsChange(requirements.filter(req => req.id !== id));
  };

  const handleImageUpload = (files: FileList | null) => {
    if (!files || readOnly) return;

    Array.from(files).forEach(file => {
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const newImage: RequirementImage = {
            id: `img_${Date.now()}_${Math.random()}`,
            url: e.target?.result as string,
            name: file.name,
            description: ""
          };
          onImagesChange([...images, newImage]);
        };
        reader.readAsDataURL(file);
      }
    });
  };

  const removeImage = (id: string) => {
    onImagesChange(images.filter(img => img.id !== id));
  };

  const updateImageDescription = (id: string, description: string) => {
    const updated = images.map(img => 
      img.id === id ? { ...img, description } : img
    );
    onImagesChange(updated);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    handleImageUpload(e.dataTransfer.files);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-100 text-red-800 border-red-200';
      case 'Medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="shadow-luxury border-0 bg-gradient-card backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-xl text-gradient">
            Initial Requirements & Assets
          </CardTitle>
          <CardDescription>
            {readOnly 
              ? "Review the initial requirements and reference materials provided"
              : "Provide initial requirements and upload any reference materials or mockups"
            }
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="req-title">Project Title</Label>
            <Input
              id="req-title"
              value={title}
              onChange={(e) => onTitleChange(e.target.value)}
              placeholder="Enter project title..."
              readOnly={readOnly}
              className="shadow-soft"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="req-description">Project Description</Label>
            <Textarea
              id="req-description"
              value={description}
              onChange={(e) => onDescriptionChange(e.target.value)}
              placeholder="Describe the project goals, scope, and any initial thoughts..."
              rows={4}
              readOnly={readOnly}
              className="shadow-soft"
            />
          </div>
        </CardContent>
      </Card>

      {/* Requirements List */}
      <Card className="shadow-luxury border-0 bg-gradient-card backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Requirements List</CardTitle>
              <CardDescription>
                {readOnly 
                  ? "Initial requirements provided by the client"
                  : "Add specific requirements, features, or functionalities needed"
                }
              </CardDescription>
            </div>
            {!readOnly && (
              <Button onClick={addRequirement} variant="outline" className="shadow-soft">
                <Plus className="h-4 w-4 mr-2" />
                Add Requirement
              </Button>
            )}
          </div>
        </CardHeader>
        <CardContent>
          {requirements.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              {readOnly ? "No requirements provided yet" : "No requirements added yet"}
            </div>
          ) : (
            <div className="space-y-4">
              {requirements.map((req) => (
                <Card key={req.id} className="shadow-soft border bg-background/50">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 space-y-3">
                        <div className="flex items-center gap-2">
                          {readOnly ? (
                            <h4 className="font-semibold">{req.title}</h4>
                          ) : (
                            <Input
                              value={req.title}
                              onChange={(e) => updateRequirement(req.id, 'title', e.target.value)}
                              className="font-semibold border-none p-0 h-auto bg-transparent"
                            />
                          )}
                          <Badge className={getPriorityColor(req.priority)}>
                            {req.priority}
                          </Badge>
                        </div>
                        {readOnly ? (
                          <p className="text-sm text-muted-foreground">{req.description}</p>
                        ) : (
                          <Textarea
                            value={req.description}
                            onChange={(e) => updateRequirement(req.id, 'description', e.target.value)}
                            placeholder="Describe this requirement..."
                            rows={2}
                            className="text-sm"
                          />
                        )}
                        {!readOnly && (
                          <div className="flex gap-2">
                            {(['High', 'Medium', 'Low'] as const).map((priority) => (
                              <Button
                                key={priority}
                                variant={req.priority === priority ? "default" : "outline"}
                                size="sm"
                                onClick={() => updateRequirement(req.id, 'priority', priority)}
                                className="text-xs"
                              >
                                {priority}
                              </Button>
                            ))}
                          </div>
                        )}
                      </div>
                      {!readOnly && (
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeRequirement(req.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Images & Assets */}
      <Card className="shadow-luxury border-0 bg-gradient-card backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Reference Materials & Assets</CardTitle>
          <CardDescription>
            {readOnly 
              ? "Images and documents provided as reference"
              : "Upload mockups, wireframes, reference images, or any visual materials"
            }
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!readOnly && (
            <div
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
                dragOver 
                  ? 'border-primary bg-primary/5' 
                  : 'border-muted-foreground/25 hover:border-primary/50'
              }`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
            >
              <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-lg font-medium mb-2">Drop images here or click to upload</p>
              <p className="text-sm text-muted-foreground mb-4">
                Supports JPG, PNG, GIF up to 10MB each
              </p>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={(e) => handleImageUpload(e.target.files)}
                className="hidden"
                id="image-upload"
              />
              <Button variant="outline" asChild className="shadow-soft">
                <label htmlFor="image-upload" className="cursor-pointer">
                  <ImageIcon className="h-4 w-4 mr-2" />
                  Choose Files
                </label>
              </Button>
            </div>
          )}

          {images.length > 0 && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map((image) => (
                <Card key={image.id} className="shadow-soft border bg-background/50">
                  <CardContent className="p-4">
                    <div className="relative group">
                      <img
                        src={image.url}
                        alt={image.name}
                        className="w-full h-32 object-cover rounded-lg"
                      />
                      {!readOnly && (
                        <Button
                          variant="destructive"
                          size="sm"
                          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => removeImage(image.id)}
                        >
                          <X className="h-3 w-3" />
                        </Button>
                      )}
                    </div>
                    <div className="mt-3 space-y-2">
                      <p className="text-sm font-medium truncate">{image.name}</p>
                      {readOnly ? (
                        image.description && (
                          <p className="text-xs text-muted-foreground">{image.description}</p>
                        )
                      ) : (
                        <Input
                          value={image.description || ""}
                          onChange={(e) => updateImageDescription(image.id, e.target.value)}
                          placeholder="Add description..."
                          className="text-xs"
                        />
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {images.length === 0 && (
            <div className="text-center py-8 text-muted-foreground">
              {readOnly ? "No reference materials provided" : "No images uploaded yet"}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};