import { useEffect, useState } from "react";
import SearchBar from "./components/Searchbar";
import { supabase } from "@/lib/supabaseClient";
import GlossaryTable from "@/components/GlossaryTable";

function App() {
  const [searchKeyword, setSearchKeyword] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [glossarys, setGlossarys] = useState<any[]>([]);

  useEffect(() => {
    logIn();
    fetchGlossaryItems();
  }, []);

  async function fetchGlossaryItems() {
    const { data, error } = await supabase
      .from("glossary")
      .select("*")
      .order("created_at", { ascending: false });
    // const data = await testAPI();

    if (error) {
      console.error("Error fetching glossary items:", error);
    } else {
      setGlossarys(data || []);
    }
  }

  async function logIn() {
    const { error } = await supabase.auth.signInWithPassword({
      email: import.meta.env.VITE_DATABASE_USER_EMAIL,
      password: import.meta.env.VITE_DATABASE_USER_PW,
    });

    if (error) {
      console.error("fail to login to supabase:", error);
    }
  }

  const filteredItems = glossarys.filter((item: { word: string }) =>
    item.word.toLowerCase().includes(searchKeyword.toLowerCase())
  );

  return (
    <div className="w-screen p-4 container">
      <div className="flex gap-8">
        <h1>Glossary</h1>
        <SearchBar keyword={searchKeyword} setKeyword={setSearchKeyword} />
      </div>
      <div className="h-8" />
      <GlossaryTable rows={filteredItems} onUpdate={fetchGlossaryItems} />
    </div>
  );
}

export default App;
