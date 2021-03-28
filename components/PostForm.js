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
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="name" ref={register({ required: true })} />
      {errors.name && <span>This field is required</span>}
      <input name="email" ref={register({ required: true })} />
      {errors.email && <span>This field is required</span>}
      <textarea
        name="comment"
        ref={register({ required: true })}
        cols="30"
        rows="10"
      ></textarea>
      {errors.text && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );
}
