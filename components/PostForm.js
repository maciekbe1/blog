import { useForm } from "react-hook-form";

export function PostForm({ _id }) {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => {
    fetch("/api/createComment", {
      method: "POST",
      body: JSON.stringify({ ...data, _id }),
    });
  };

  //console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className="flex justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg">
        <div className="flex flex-wrap mb-6 -mx-3 xs:mb-3">
          <Input
            label="Nazwa"
            name="name"
            register={register}
            required
            error={errors.name}
          />
          <Input
            label="Email"
            name="email"
            register={register}
            required
            error={errors.email}
          />
        </div>

        <div className="flex flex-wrap mb-6 -mx-3">
          <div className="w-full px-3">
            <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase dark:text-gray-50">
              Komentarz
            </label>
            <textarea
              name="comment"
              ref={register({ required: true })}
              cols="30"
              rows="5"
              className={`"block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border border-gray-200 rounded appearance-none focus:outline-none focus:bg-white focus:border-gray-500" ${
                errors.name ? "border-red-500 mb-2" : ""
              }`}
            ></textarea>
            {errors.comment && (
              <p className="text-xs italic text-red-500">
                Proszę uzupełnić pole
              </p>
            )}
          </div>
        </div>
        <input
          type="submit"
          className="px-6 py-2 text-white bg-indigo-600 rounded"
        />
      </form>
    </div>
  );
}

const Input = ({ label, name, error, register, required }) => (
  <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0 xs:mb-3">
    <label className="block mb-2 text-xs font-bold tracking-wide text-gray-700 uppercase dark:text-gray-50">
      {label}
    </label>
    <input
      className={`"block w-full px-4 py-3 leading-tight text-gray-700 bg-gray-200 border rounded appearance-none focus:outline-none focus:bg-white ${
        error ? "border-red-500 mb-2" : ""
      }`}
      type="text"
      name={name}
      ref={register({ required })}
    />
    {error && (
      <p className="text-xs italic text-red-500">Proszę uzupełnić pole</p>
    )}
  </div>
);
