export default function dateUtil(date) {
  const month =
    (new Date(date).getMonth() + 1).toString().length < 2
      ? "0" + (new Date(date).getMonth() + 1)
      : new Date(date).getMonth() + 1;
  return (
    new Date(date).getDate() + "/" + month + "/" + new Date(date).getFullYear()
  );
}
