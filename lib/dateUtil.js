export default function dateUtil(date) {
  const d = new Date(date);
  return d.toLocaleDateString("en-GB");
}
