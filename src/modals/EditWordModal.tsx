import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/lib/supabaseClient";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onEdit: () => void;
  item: { id: number; word: string } | null;
}

export default function EditWordModal({
  isOpen,
  onClose,
  onEdit,
  item,
}: Props) {
  const [word, setWord] = useState("");

  useEffect(() => {
    if (item) setWord(item.word);
  }, [item]);

  const handleEdit = async () => {
    if (!item) return;
    const { error } = await supabase
      .from("glossary")
      .update({ word })
      .eq("id", item.id);

    if (error) {
      console.error("Error updating word:", error);
    } else {
      onEdit();
      onClose();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Word</DialogTitle>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="word" className="text-right">
              Word
            </Label>
            <Input
              id="word"
              value={word}
              onChange={(e) => setWord(e.target.value)}
              className="col-span-3"
            />
          </div>
        </div>

        <DialogFooter>
          <Button onClick={handleEdit}>Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
