// client.js
import sanityClient from "@sanity/client";

const options = {
  projectId: process.env.SANITY_PROJECT_ID, // you can find this in sanity.json
  dataset: process.env.SANITY_DATASET_NAME, // or the name you chose in step 1
  apiVersion: new Date().toISOString().slice(0, 10),
  useCdn: process.env.NODE_ENV === "production", // `false` if you want to ensure fresh data
};

export const previewClient = sanityClient({
  ...options,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

export default sanityClient(options);
