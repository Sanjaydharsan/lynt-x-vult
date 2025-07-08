"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash, X, Upload, File } from "lucide-react";
import { useDropzone } from "react-dropzone";

export default function EditBatchDrawer({ isOpen, onClose, batch, onUpdate }) {
  const [localBatch, setLocalBatch] = useState(batch);
  const [filesToAdd, setFilesToAdd] = useState([]);
  const [markedForDelete, setMarkedForDelete] = useState([]);
  const [dragOver, setDragOver] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    setLocalBatch(batch);
    setFilesToAdd([]);
    setMarkedForDelete([]);
  }, [batch]);

  const onDrop = useCallback((acceptedFiles) => {
    const newFiles = acceptedFiles.map((file) => ({
      file,
      name: file.name,
      size:
        file.size > 1024 * 1024
          ? `${(file.size / (1024 * 1024)).toFixed(1)} MB`
          : `${(file.size / 1024).toFixed(1)} KB`,
      type: file.type.split("/")[0],
    }));
    setFilesToAdd((prev) => [...prev, ...newFiles]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    onDragEnter: () => setDragOver(true),
    onDragLeave: () => setDragOver(false),
    accept: {
      "application/pdf": [".pdf"],
      "image/*": [".png", ".jpg", ".jpeg", ".tiff", ".tif"],
    },
    maxSize: 10 * 1024 * 1024,
  });

  const handleRemoveExisting = (docId) => {
    setMarkedForDelete((prev) => [...prev, docId]);
  };

  const handleRemoveNew = (idx) => {
    setFilesToAdd((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      const formData = new FormData();
      formData.append("batchname", localBatch.name);
      markedForDelete.forEach((id) => formData.append("removeDocuments", id));
      filesToAdd.forEach(({ file }) => formData.append("addDocuments", file));
      formData.append("method", "edit");

      await fetch(`/api/batches/${localBatch.id}/edit`, {
        method: "PUT",
        body: formData,
      });

      onClose();
      onUpdate();
      alert("Batch updated successfully");
    } catch (err) {
      console.error("Update failed:", err);
      alert("Update failed");
    } finally {
      setSaving(false);
    }
  };

  return (
    <Drawer open={isOpen} onOpenChange={onClose} direction="right">
      <DrawerContent className="custom-drawer-content bg-white rounded-l-xl shadow-xl p-6 overflow-y-auto">
        <DrawerHeader>
          <div className="flex justify-between mb-4">
            <DrawerTitle>Edit Orders</DrawerTitle>
            <DrawerClose onClick={onClose}>
              <X className="w-5 h-5 text-gray-600 hover:text-gray-800 cursor-pointer" />
            </DrawerClose>
          </div>
        </DrawerHeader>

        {localBatch && (
          <div className="space-y-6 mt-4">
            {/* Order Name */}
            <div>
              <Label htmlFor="edit-order-name">Order Name</Label>
              <Input
                id="edit-order-name"
                value={localBatch.name}
                onChange={(e) =>
                  setLocalBatch({ ...localBatch, name: e.target.value })
                }
              />
            </div>

            {/* Existing Invoices */}
            <div>
              <Label className="block mb-1">Existing Invoices</Label>
              {localBatch.documentsList.length === 0 && (
                <p className="text-sm text-gray-500">No invoices</p>
              )}
              {localBatch.documentsList.map((doc) => {
                const marked = markedForDelete.includes(doc.id);
                return (
                  <div
                    key={doc.id}
                    className={`flex items-center justify-between px-3 py-2 rounded border mb-1 ${
                      marked
                        ? "bg-red-50 border-red-300"
                        : "bg-gray-100 border-gray-200"
                    }`}
                  >
                    <div className="truncate text-sm">
                      {doc.filename}{" "}
                      {marked && (
                        <span className="text-xs text-red-500">(To be deleted)</span>
                      )}
                    </div>
                    {!marked && (
                      <Button
                        size="icon"
                        variant="ghost"
                        className="text-red-600 hover:text-red-800"
                        onClick={() => handleRemoveExisting(doc.id)}
                      >
                        <Trash className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Files to be added */}
            {filesToAdd.length > 0 && (
              <div className="space-y-2">
                <Label className="block mb-1">Files to be Added</Label>
                {filesToAdd.map(({ name, size, type }, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between px-3 py-2 bg-white border rounded"
                  >
                    <div className="flex items-center space-x-2 truncate">
                      <File
                        className={`w-4 h-4 ${
                          type === "image" ? "text-green-600" : "text-indigo-600"
                        }`}
                      />
                      <span className="text-sm truncate">
                        {name} - {size}
                      </span>
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => handleRemoveNew(idx)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            )}

            {/* Dropzone */}
            <div
              {...getRootProps()}
              className={`border-2 border-dashed rounded-lg p-4 text-center cursor-pointer ${
                dragOver ? "border-indigo-500 bg-indigo-50" : "border-gray-300"
              }`}
            >
              <input {...getInputProps()} />
              <Upload className="w-6 h-6 mx-auto text-gray-500 mb-2" />
              <p className="text-sm text-gray-600">Drag and drop files here or click to browse</p>
              <p className="text-xs text-gray-400">PDF, JPG, PNG, TIF up to 10MB</p>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex justify-end gap-2">
              <Button variant="outline" onClick={onClose} disabled={saving}>
                Cancel
              </Button>
              <Button onClick={handleSave} disabled={saving}>
                {saving ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          </div>
        )}
      </DrawerContent>
    </Drawer>
  );
}
