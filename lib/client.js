import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "34lbujvc",
  dataset: "production",
  apiVersion: "2022-06-15",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const ulrFor = (source) => {
  builder.image(source);
};
