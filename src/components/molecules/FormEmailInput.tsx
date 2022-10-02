export const FormEmailInput = () => {
  console.log('hoge');

  return (
    <label htmlFor="email" className="text-white block text-2xl">
      Email
      <input type="text" id="email" className="block mt-1 bg-neutral-700 rounded-lg w-full py-2 px-3" />
    </label>
  );
};
