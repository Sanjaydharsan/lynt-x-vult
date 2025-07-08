"use client";

import { useState, useCallback, useEffect } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerClose,
} from "@/components/ui/drawer";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload, File, X, Trash } from "lucide-react";
import { useDropzone } from "react-dropzone";
import { useUpdateOrder } from "@/hooks/orders";

export default function EditOrder({ isOpen, onClose, order, onUpdateComplete }) {
  const [orderName, setOrderName] = useState("");
  const [existingImages, setExistingImages] = useState([]);
  const [filesToAdd, setFilesToAdd] = useState([]);
  const [imagesToDelete, setImagesToDelete] = useState([]);
  const [saving, setSaving] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  // Single confirm dialog for both types
  const [confirmDialog, setConfirmDialog] = useState({
    open: false,
    imgId: null, // for existingImages
    imgName: "",
    action: null, // "deleteExisting" | "deleteNew"
    fileIndex: null, // for filesToAdd
  });

  const updateOrder = useUpdateOrder();

  useEffect(() => {
    if (order) {
      setOrderName(order.batchname || "");
      setExistingImages(order.imagecollection || []);
      setFilesToAdd([]);
      setImagesToDelete([]);
    }
  }, [order]);

  const onDrop = useCallback((acceptedFiles) => {
    const fileList = acceptedFiles.map((file) => ({
      file,
      name: file.name,
      size:
        file.size > 1024 * 1024
          ? `${(file.size / (1024 * 1024)).toFixed(1)} MB`
          : `${(file.size / 1024).toFixed(1)} KB`,
      type: file.type.split("/")[0],
    }));
    setFilesToAdd((prev) => [...prev, ...fileList]);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    onDragEnter: () => setDragOver(true),
    onDragLeave: () => setDragOver(false),
    accept: {
      "application/pdf": [".pdf"],
      "image/*": [".png', '.jpg', '.jpeg', '.tiff', '.tif"],
    },
    maxSize: 10 * 1024 * 1024,
  });

  const openConfirmDialog = ({ imgId = null, imgName, action, fileIndex = null }) => {
    setConfirmDialog({
      open: true,
      imgId,
      imgName,
      action,
      fileIndex,
    });
  };

  const handleConfirmDelete = () => {
    if (confirmDialog.action === "deleteExisting") {
      setImagesToDelete((prev) => [...prev, confirmDialog.imgId]);
    } else if (confirmDialog.action === "deleteNew") {
      setFilesToAdd((prev) => prev.filter((_, i) => i !== confirmDialog.fileIndex));
    }
    setConfirmDialog({ open: false, imgId: null, imgName: "", action: null, fileIndex: null });
  };

  const handleSave = async () => {
    if (!order || !order.id) return;
    setSaving(true);

    try {
      const formData = new FormData();
      formData.append("batchname", orderName);
      formData.append("isdelete", imagesToDelete.length > 0);
      imagesToDelete.forEach((imgId) => formData.append("removeImages", imgId));
      filesToAdd.forEach(({ file }) => formData.append("addImages", file));
      if (filesToAdd.length > 0) {
      formData.append("method", "direct_method");
      }
      await updateOrder.mutateAsync({
        orderId: order.id,
        formData,
      });

      onUpdateComplete?.();
      onClose();
    } catch (err) {
      console.error(err);
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <Drawer
        open={isOpen}
        onOpenChange={(open) => !open && onClose()}
        direction="right"
      >
        <DrawerContent className="custom-drawer-content bg-white rounded-l-xl shadow-xl p-6 overflow-y-auto">
          <div className="flex items-center justify-between mb-4">
            <DrawerTitle className="text-lg font-semibold">Edit Orders</DrawerTitle>
            <DrawerClose>
              <X className="w-6 h-6 text-gray-600 hover:text-gray-800" />
            </DrawerClose>
          </div>

          <div className="space-y-4">
            {/* Order Name */}
            <div>
              <label className="block text-sm font-medium mb-1">Order Name</label>
              <Input
                value={orderName}
                onChange={(e) => setOrderName(e.target.value)}
                disabled={saving}
              />
            </div>

            {/* Existing Invoices */}
            <div>
              <label className="block text-sm font-medium mb-1">Existing Invoices</label>
              {existingImages.length === 0 && (
                <p className="text-sm text-gray-500">No invoices</p>
              )}

              {existingImages.map((img) => {
                const isMarkedForDelete = imagesToDelete.includes(img.id);
                return (
                  <div
                    key={img.id}
                    className={`flex items-center justify-between px-3 py-2 rounded border ${
                      isMarkedForDelete
                        ? "bg-red-50 border-red-300"
                        : "bg-gray-50 border-gray-200"
                    } mb-1`}
                  >
                    <div className="truncate text-sm">
                      {img.imagename}{" "}
                      {isMarkedForDelete && (
                        <span className="text-xs text-red-500">(To be deleted)</span>
                      )}
                    </div>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() =>
                        openConfirmDialog({
                          imgId: img.id,
                          imgName: img.imagename,
                          action: "deleteExisting",
                        })
                      }
                      disabled={saving}
                    >
                      <Trash className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                );
              })}
            </div>
            {/* Files to Add */}
            {filesToAdd.length > 0 && (
              <div className="space-y-2">
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
                      onClick={() =>
                        openConfirmDialog({
                          imgName: name,
                          action: "deleteNew",
                          fileIndex: idx,
                        })
                      }
                      disabled={saving}
                    >
                      <Trash className="h-4 w-4 text-red-500" />
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
              <p className="text-xs text-gray-400">PDF, JPG, PNG , TIF up to 10MB</p>
            </div>

            {/* Actions */}
            <div className="flex justify-end gap-2 mt-4">
              <Button variant="outline" onClick={onClose} disabled={saving}>
                Cancel
              </Button>
              <Button onClick={handleSave} disabled={saving || !orderName.trim()}>
                {saving ? "Saving..." : "Save Changes"}
              </Button>
            </div>
          </div>
        </DrawerContent>
      </Drawer>

      {/* Confirm Delete Dialog */}
      <Dialog
        open={confirmDialog.open}
        onOpenChange={(open) =>
          setConfirmDialog((prev) => ({ ...prev, open }))
        }
      >
        <DialogContent className="z-[9999] sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Are you sure?</DialogTitle>
            <DialogDescription>
              Delete <span className="font-semibold">{confirmDialog.imgName}</span>?<br /> This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex justify-end gap-2 pt-4">
            <Button
              variant="outline"
              onClick={() =>
                setConfirmDialog({
                  open: false,
                  imgId: null,
                  imgName: "",
                  action: null,
                  fileIndex: null,
                })
              }
              disabled={saving}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              onClick={handleConfirmDelete}
              disabled={saving}
            >
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
