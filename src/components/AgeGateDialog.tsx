import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface AgeGateDialogProps {
  open: boolean;
}

const AgeGateDialog = ({ open }: AgeGateDialogProps) => {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Age Requirement</AlertDialogTitle>
          <AlertDialogDescription className="text-base">
            You are required to be 18 or older to continue.
          </AlertDialogDescription>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AgeGateDialog;
