import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useDeleteOrder } from "@/hooks/orders"; 
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
// import { useState } from "react";
// import toast from "react-hot-toast";

export function DeleteOrder({ isOpen, onOpenChange, batchId, batchName }) {
  const router = useRouter();
  const { user } = useUser();
  const organizationId = user?.organizationId;
    // console.log("batch id", batchId)
  const { mutate: deleteOrder, isLoading: isDeleting } = useDeleteOrder();

 const handleDelete = () => {
  deleteOrder(batchId, {
    onSuccess: () => {
      router.refresh();
      onOpenChange(false);
    },
    onError: () => {
      onOpenChange(false);
    },
  });
};


  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            Do you want to delete the Order <span className="font-semibold">"{batchName}"</span>?
            <br /> This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex justify-end gap-2 pt-4">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            disabled={isDeleting}
          >
            Cancel
          </Button>
          <Button
            variant="destructive"
            onClick={handleDelete}
            disabled={isDeleting}
          >
            {isDeleting ? "Deleting..." : "Delete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
