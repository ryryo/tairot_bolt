"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { DialogClose } from "./dialog-close";
import { DialogContent, DialogPortal, DialogOverlay } from "./dialog-content";
import { DialogHeader } from "./dialog-header";
import { DialogTitle } from "./dialog-title";

const Dialog = DialogPrimitive.Root;
const DialogTrigger = DialogPrimitive.Trigger;
const DialogDescription = DialogPrimitive.Description;

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
  DialogPortal,
  DialogOverlay,
};