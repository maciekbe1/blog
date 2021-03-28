import { useForm } from "react-hook-form";

export default function SearchBar() {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = async (data) => {
    const res = await fetch("/api/getPostByName", {
      method: "POST",
      body: JSON.stringify({ ...data }),
    });
    const result = await res.json();
    console.log(result);
  };

  return (
    <div className="relative text-gray-600">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="h-10 px-5 pr-16 text-sm bg-white border-2 border-gray-300 rounded focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
          ref={register({ required: true })}
        />

        <button type="submit" className="absolute top-0 right-0 mt-2 mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </form>
    </div>
  );
}
