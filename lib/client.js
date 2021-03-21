// client.js
import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: process.env.SANITY_PROJECT_ID, // you can find this in sanity.json
  dataset: process.env.SANITY_DATASET_NAME, // or the name you chose in step 1
  useCdn: process.env.NODE_ENV === "production", // `false` if you want to ensure fresh data
});
