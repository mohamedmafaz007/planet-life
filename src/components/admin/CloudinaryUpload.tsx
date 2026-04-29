import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Upload, X, Loader2 } from "lucide-react";
import { api } from "@/lib/api";

interface CloudinaryUploadProps {
  onUpload: (url: string) => void;
  folder?: string;
  defaultImage?: string | null;
  className?: string;
}

export const CloudinaryUpload = ({ 
  onUpload, 
  folder = "planet_life/images",
  defaultImage,
  className = "" 
}: CloudinaryUploadProps) => {
  const [isUploading, setIsUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(defaultImage || null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 50000000) { // 50MB limit
      alert("File is too large. Please choose an image under 50MB.");
      return;
    }

    try {
      setIsUploading(true);
      const token = localStorage.getItem("adminToken");
      if (!token) throw new Error("No admin token found");

      // Set local preview instantly
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);

      const result = await api.upload(file, folder, token);
      onUpload(result.url);
      setPreview(result.url);
    } catch (error) {
      console.error("Upload failed", error);
      alert("Upload failed. Please try again.");
      setPreview(defaultImage || null);
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleClear = () => {
    setPreview(null);
    onUpload("");
  };

  const isVideo = preview?.endsWith('.mp4') || preview?.endsWith('.mov') || preview?.includes('video/upload');

  return (
    <div className={`space-y-4 ${className}`}>
      {preview ? (
        <div className="relative rounded-md overflow-hidden border w-full aspect-video bg-muted flex items-center justify-center">
          {isVideo ? (
            <video 
              src={preview} 
              controls 
              className="w-full h-full object-cover" 
            />
          ) : (
            <img
              src={preview}
              alt="Preview"
              className="w-full h-full object-cover"
            />
          )}
          <Button
            type="button"
            variant="destructive"
            size="icon"
            className="absolute top-2 right-2 rounded-full w-8 h-8 opacity-80 hover:opacity-100"
            onClick={handleClear}
            disabled={isUploading}
          >
            <X className="h-4 w-4" />
          </Button>
          {isUploading && (
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white">
              <Loader2 className="h-8 w-8 animate-spin mb-2" />
              <span className="text-sm font-medium">Uploading to Cloudinary...</span>
            </div>
          )}
        </div>
      ) : (
        <div className="relative border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center gap-2 bg-muted/50 hover:bg-muted transition-colors">
          <Upload className="h-8 w-8 text-muted-foreground" />
          <div className="text-sm font-medium">Click or drag file to upload</div>
          <div className="text-xs text-muted-foreground">Supports JPG, PNG, WEBP, MP4 (max 50MB)</div>
          <input
            ref={fileInputRef}
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            accept="image/*,video/*"
            onChange={handleFileChange}
            disabled={isUploading}
          />
          {isUploading && (
            <div className="absolute inset-0 bg-background/80 flex items-center justify-center">
              <Loader2 className="h-6 w-6 animate-spin text-primary" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
