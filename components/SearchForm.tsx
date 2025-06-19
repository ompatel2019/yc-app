import React from "react";
import Form from "next/form";
import SearchFormReset from "@/components/SearchFormReset";
import { Search } from "lucide-react";
import { Button } from "./ui/button";

type SearchFormProps = {
  query?: string;
};

export default function SearchForm({ query = "" }: SearchFormProps) {
  return (
    <>
      <Form action="/" scroll={false} className="search-form">
        <input
          name="query"
          defaultValue={query}
          className="search-input"
          placeholder="Search Startups"
        />

        <div className="flex gap-2">{query && <SearchFormReset />}</div>

        <Button type="submit" className="search-btn text-white">
          <Search className="size-5" />
        </Button>
      </Form>
    </>
  );
}
