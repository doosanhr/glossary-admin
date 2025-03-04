import { Input } from "@/components/ui/input";

type Props = {
  keyword: string;
  setKeyword: (input: string) => void;
};

export default function SearchBar({ keyword, setKeyword }: Props) {
  return (
    <Input
      type="text"
      name="keyword"
      id="keyword"
      placeholder="Search keyword..."
      value={keyword}
      onChange={(e) => setKeyword(e.currentTarget.value)}
    />
  );
}
