"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import AdvancedExpandTable from "@/components/ExpandTable";
import { useGetAllOrders } from "@/hooks/orders";
import { useDeleteOrder } from "@/hooks/orders";
import LoadingSpinner from "@/components/LoadingSpinner";
import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
  DrawerTitle,
  DrawerClose,
} from "@/components/ui/drawer";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Pencil, Trash2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
// import * as pdfjsLib from "pdfjs-dist";
import { DeleteOrder } from "./DeleteOrder";
import EditOrder from "./EditOrder";
// pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.js";

export default function ListOrders() {
  const [convertedImages, setConvertedImages] = useState([]);
  const [isConverting, setIsConverting] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [isEditDrawerOpen, setIsEditDrawerOpen] = useState(false);
  const [editingOrder, setEditingOrder] = useState(null);
  const [pdfjsLib, setPdfjsLib] = useState(null);
  const router = useRouter();
  const tableRef = useRef(null);

  const { data: orders, isLoading: ordersLoading } = useGetAllOrders();
  const { mutate: deleteOrder } = useDeleteOrder();
  const isLoading = ordersLoading;
  console.log("data", orders);
  useEffect(() => {
    const loadPdfJs = async () => {
      const pdfjsLib = await import("pdfjs-dist/build/pdf");
      pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.js";
      setPdfjsLib(pdfjsLib);
    };
    loadPdfJs();
  }, []);

  const orderColumns = [
    { header: "Order Name", accessor: "batchname" },
    { header: "Date", accessor: "createdat" },
    { header: "Total Invoices", accessor: "imagescount" },
    { header: "Upload Method", accessor: "method" },
    { header: "Actions", accessor: "actions" },
  ];

  const openDeleteModal = (order) => {
    setSelectedOrder(order);
    setIsDeleteModalOpen(true);
  };
  const openEditDrawer = (order) => {
    setEditingOrder(order);
    setIsEditDrawerOpen(true);
  };
  const convertPdfToImage = async (image) => {
    if (!pdfjsLib) return;
    setIsConverting(true);
    setConvertedImages([]);

    const allConvertedImages = [];

    try {
      const pdf = await pdfjsLib.getDocument(image.pdfconvert).promise;
      const numPages = pdf.numPages;

      for (let pageNum = 1; pageNum <= numPages; pageNum++) {
        const page = await pdf.getPage(pageNum);
        const viewport = page.getViewport({ scale: 1.0 });

        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        await page.render({ canvasContext: context, viewport }).promise;

        // const displayFilename = `${image.filename}_page${pageNum}.png`;

        allConvertedImages.push({
          // filename: displayFilename,
          originalFilename: image.filename,
          page: pageNum,
          dataUrl: canvas.toDataURL("image/png"),
        });
      }

      setConvertedImages(allConvertedImages);
    } catch (error) {
      console.error("Error converting PDF to images:", error);
      setConvertedImages([]);
    } finally {
      setIsConverting(false);
    }
  };

  const scrollToTable = () => {
    tableRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full relative min-h-screen">
      {isLoading ? (
        <div className="flex justify-center items-center h-screen">
          <LoadingSpinner />
        </div>
      ) : (
        <>
          <div
            ref={tableRef}
            className="grid grid-cols-1 lg:grid-cols-1 gap-5 mb-4"
          >
            <div className="bg-[#f9f8f6] rounded-xl col-span-2 p-5 transition-shadow duration-300 w-full">
              <h2 className="text-xl font-bold text-black mb-3">Orders List</h2>
              <div className="overflow-x-auto bg-white rounded-xl">
                <AdvancedExpandTable
                  columns={orderColumns}
                  data={orders}
                  enableSorting={true}
                  enableFiltering={false}
                  enablePagination={true}
                  rowsPerPage={5}
                  renderRow={(item) => (
                    <>
                      <td className="py-2 px-4 max-w-xs truncate">
                        {item.batchname}
                      </td>
                      <td className="py-2 px-4">
                        {new Date(item.createdat).toLocaleDateString()}
                      </td>
                      <td className="py-2 px-4">
                        <div className="flex items-center gap-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-5 h-5 text-indigo-500"
                            fill="currentcolor"
                          >
                            <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-208 0c-35.3 0-64 28.7-64 64l0 144-48 0c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z" />
                          </svg>
                          {item.imagescount ?? "-"}
                        </div>
                      </td>
                      <td className="py-2 px-4 max-w-xs truncate">
                        {item.method
                          .split("_")
                          .map(
                            (word) =>
                              word.charAt(0).toUpperCase() + word.slice(1)
                          )
                          .join(" ")}
                      </td>
                      <td className="py-2 px-4 flex gap-2">
                        <Button
                          variant="ghost"
                          className="bg-muted hover:bg-muted/80 border border-gray-200"
                          onClick={() => openEditDrawer(item)}
                        >
                          <Pencil size={16} className="text-gray-700" />
                        </Button>
                        <Button
                          variant="ghost"
                          className="bg-muted hover:bg-muted/80 border border-gray-200"
                          onClick={() => openDeleteModal(item)}
                        >
                          <Trash2 size={16} className="text-red-500" />
                        </Button>
                      </td>
                    </>
                  )}
                  renderExpandedRow={(item) => (
                    <div className="py-4 bg-white border border-gray-300 rounded-b-lg">
                      {item.imagecollection &&
                      item.imagecollection.length > 0 ? (
                        <div className="overflow-x-auto">
                          <table className="min-w-full w-auto text-sm">
                            <thead>
                              <tr className="text-left border-b border-gray-200">
                                <th className="pb-2 px-4 max-w-xs">Filename</th>
                                <th className="pb-2 px-4">Created At</th>
                                <th className="pb-2 px-4">Invoice</th>
                                <th className="pb-2 px-4">Status</th>
                                <th className="pb-2 px-4">OCR</th>
                              </tr>
                            </thead>
                            <tbody>
                              {item.imagecollection.map((image, idx) => (
                                <tr key={idx} className="">
                                  <td className="py-2 px-4 max-w-xs truncate">
                                    {image.imagename}
                                  </td>
                                  <td className="py-2 px-4 flex items-center gap-2">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 448 512"
                                      className="w-4 h-4 text-indigo-500"
                                      fill="currentcolor"
                                    >
                                      <path d="M128 0c17.7 0 32 14.3 32 32l0 32 128 0 0-32c0-17.7 14.3-32 32-32s32 14.3 32 32l0 32 48 0c26.5 0 48 21.5 48 48l0 48L0 160l0-48C0 85.5 21.5 64 48 64l48 0 0-32c0-17.7 14.3-32 32-32zM0 192l448 0 0 272c0 26.5-21.5 48-48 48L48 512c-26.5 0-48-21.5-48-48L0 192zm64 80l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm128 0l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zM64 400l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0zm112 16l0 32c0 8.8 7.2 16 16 16l32 0c8.8 0 16-7.2 16-16l0-32c0-8.8-7.2-16-16-16l-32 0c-8.8 0-16 7.2-16 16z" />
                                    </svg>
                                    {new Date(
                                      image.createdat
                                    ).toLocaleDateString()}
                                  </td>
                                  <td className="py-2 px-4">
                                    <Drawer direction="right">
                                      <DrawerTrigger asChild>
                                        <button
                                          className="flex items-center cursor-pointer gap-2 bg-indigo-500 text-white px-3 py-1 rounded-xl hover:bg-indigo-600 transition-colors"
                                          onClick={() =>
                                            convertPdfToImage(image)
                                          }
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 576 512"
                                            className="w-4 h-4"
                                            fill="currentcolor"
                                          >
                                            <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                                          </svg>
                                          <span>View Invoice</span>
                                        </button>
                                      </DrawerTrigger>
                                      <DrawerContent className="custom-drawer-content bg-white rounded-l-xl shadow-xl p-6 overflow-y-auto">
                                        <VisuallyHidden>
                                          <DrawerTitle>
                                            Invoice Preview
                                          </DrawerTitle>
                                        </VisuallyHidden>
                                        <DrawerClose className="absolute top-4 right-4">
                                          <X className="w-6 h-6 text-gray-600 hover:text-gray-800" />
                                        </DrawerClose>
                                        {isConverting ? (
                                          <div className="flex justify-center items-center h-full">
                                            <LoadingSpinner />
                                          </div>
                                        ) : convertedImages.length > 0 ? (
                                          <div className="space-y-6">
                                            {convertedImages.map((img, idx) => (
                                              <div key={idx}>
                                                <p className="text-sm font-semibold mb-1">
                                                  {img.imagename} (Page{" "}
                                                  {img.page})
                                                </p>
                                                <img
                                                  src={img.dataUrl}
                                                  alt={img.imagename}
                                                  className="w-full rounded-md"
                                                />
                                              </div>
                                            ))}
                                          </div>
                                        ) : (
                                          <p className="text-gray-600">
                                            No images available.
                                          </p>
                                        )}
                                      </DrawerContent>
                                    </Drawer>
                                  </td>
                                  <td className="py-2 px-4 capitalize">
                                    <span
                                      className={`rounded-md px-2 py-0.5 leading-[1.2] text-[0.7rem] ${
                                        image.status === "notprocessed"
                                          ? "bg-indigo-100 text-indigo-600"
                                          : "bg-green-100 text-green-600"
                                      }`}
                                    >
                                      {!image?.ocrtext
                                        ? "Not Processed"
                                        : "OCR Processed"}
                                    </span>
                                  </td>
                                  <td className="py-2 px-4 flex gap-2">
                                    {image.ocrtext ? (
                                      <Drawer direction="right">
                                        <DrawerTrigger asChild>
                                          <button className="flex items-center cursor-pointer gap-2 bg-indigo-500 text-white px-3 py-1 rounded-xl hover:bg-indigo-600 transition-colors">
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              viewBox="0 0 576 512"
                                              className="w-4 h-4"
                                              fill="currentcolor"
                                            >
                                              <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
                                            </svg>
                                            <span>View OCR</span>
                                          </button>
                                        </DrawerTrigger>
                                        <DrawerContent className="custom-drawer-content bg-white rounded-l-xl shadow-xl p-6 overflow-y-auto max-w-xl">
                                          <VisuallyHidden>
                                            <DrawerTitle>
                                              OCR Content
                                            </DrawerTitle>
                                          </VisuallyHidden>
                                          <DrawerClose className="absolute top-4 right-4">
                                            <X className="w-6 h-6 text-gray-600 hover:text-gray-800" />
                                          </DrawerClose>
                                          <pre className="whitespace-pre-wrap text-sm text-gray-800">
                                            {image.ocrtext}
                                          </pre>
                                        </DrawerContent>
                                      </Drawer>
                                    ) : null}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ) : (
                        <p className="text-sm text-gray-500">No Data's Found</p>
                      )}
                    </div>
                  )}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </>
      )}
      <DeleteOrder
        isOpen={isDeleteModalOpen}
        onOpenChange={setIsDeleteModalOpen}
        batchId={selectedOrder?.id}
        batchName={selectedOrder?.batchname}
      />
      <EditOrder
        isOpen={isEditDrawerOpen}
        onClose={() => setIsEditDrawerOpen(false)}
        order={editingOrder}
      />
    </div>
  );
}
