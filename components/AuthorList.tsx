import { Fragment } from "react";
import { siteConfig } from "@/data/site";

export function AuthorList({ authors }: { authors: string[] }) {
  return <p className="authors">{authors.map((author, index) => <Fragment key={`${author}-${index}`}>
    {index > 0 && ", "}
    {author === siteConfig.publicationAuthorName ? <strong>{author}</strong> : author}
  </Fragment>)}</p>;
}
