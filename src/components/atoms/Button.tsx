/* eslint-disable react/destructuring-assignment */
type ButtonType = {
  title: string;
  onClick: (event: any) => void;
};

export const Button = (props: ButtonType) => (
  <button
    className="w-full text-white bg-orange-600 px-3 py-3 rounded-lg text-2xl bg-gradient-to-r from-[#FF512F] to-[#F09819] hover:from-[#F09819] :hover:to-[#FF512F] transition ease-in-out delay-150"
    type="submit"
    onClick={props.onClick}
  >
    {props.title}
  </button>
);
