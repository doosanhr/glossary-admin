import { useState } from "react";
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

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onInsert: () => void;
};

export default function InsertWordModal({ isOpen, onClose, onInsert }: Props) {
  const [words, setWords] = useState<string[]>([""]);

  const handleAddWord = () => {
    setWords([...words, ""]);
  };

  const handleWordChange = (index: number, value: string) => {
    const newWords = [...words];
    newWords[index] = value;
    setWords(newWords);
  };

  const handleInsert = async () => {
    const { error } = await supabase
      .from("glossary")
      .insert(
        words.filter((word) => word.trim() !== "").map((word) => ({ word }))
      );

    if (error) {
      console.error("Error inserting words:", error);
    } else {
      onInsert();
      onClose();
      setWords([""]);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Insert New Words</DialogTitle>
        </DialogHeader>

        {words.map((word, index) => (
          <div key={index} className="grid py-1">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor={`word-${index}`} className="text-right">
                Word {index + 1}
              </Label>
              <Input
                id={`word-${index}`}
                value={word}
                onChange={(e) => handleWordChange(index, e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
        ))}
        <Button onClick={handleAddWord}>Add Another Word</Button>

        <DialogFooter>
          <Button onClick={handleInsert}>Insert</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
