export const Mypage = () => {
  console.log('hoge');

  return (
    <div className="container mx-auto max-w-lg">
      <div className="flex justify-center">
        <h2 className="mt-14 text-white text-3xl">My page</h2>
      </div>
      <div className="mt-10">
        <div className="mt-5 flex align-middle justify-center">
          <img src="https://okalog.info/wp-content/uploads/2020/11/oka.png" alt="" />
        </div>
        <div className="block mt-8">
          <dl className="text-white block text-2xl">
            <dt>- Name</dt>
            <dd>Takahiro Okada</dd>
          </dl>
          <dl className="text-white block text-2xl mt-6">
            <dt>- Email</dt>
            <dd>hoge@gmail.com</dd>
          </dl>
        </div>
      </div>
    </div>
  );
};
