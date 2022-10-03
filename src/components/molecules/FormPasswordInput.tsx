export const FormPasswordInput = () => {
  console.log('hoge');

  return (
    <label htmlFor="password" className="text-white block text-2xl mt-8">
      Password
      <input type="text" id="password" className="block mt-1 bg-neutral-700 rounded-lg w-full py-2 px-3" />
    </label>
  );
};
