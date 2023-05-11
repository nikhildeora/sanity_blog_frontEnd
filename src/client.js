import { createClient } from "@sanity/client";

export const client = createClient({
    projectId : "sv42w7us",
    dataset : "production",
    useCdn : true,
    apiVersion : "2023-05-10",
    token :'skv1jPkv4t00iimtrHsb2uUq9u5dr6S5KtNX0ecGzfywiaHKzoX4U9tkf5kFDTWQ0Sp0yxExjZKyr0HDwL6xS8pHrAl79Knt4ZIjQCQRJAfrBE6MsYiCnQCYzzgjuEj72MDFwXuuj3r05ZidafZpNb2aw1mSAUEDrIGgl25WkuZsb4i1HWkV'
  }) 