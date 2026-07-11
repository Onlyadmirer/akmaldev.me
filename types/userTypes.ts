export type Achiv = {
  title: string | null;
  url: string;
  publisher: string;
  issuedOn: string;
}

export type Projects = {
  title: string;
  image: string
  slug: string
  description: string
  url: string
  stack: string[]
}

export type InputCommentType = {
  comments: string
}