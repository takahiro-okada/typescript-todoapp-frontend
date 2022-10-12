/* eslint-disable react/destructuring-assignment */
type ButtonType = {
  title: string;
  onClick: (event: any) => void;
};

export const CompetedButton = (props: ButtonType) => (
  <button
    className="flex align-middle justify-center w-full text-white bg-orange-600 px-3 py-3 rounded-lg text-md bg-gradient-to-r from-[#FF512F] to-[#F09819] hover:from-[#F09819] :hover:to-[#FF512F] transition ease-in-out delay-150"
    type="submit"
    onClick={props.onClick}
  >
    <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17 3H7C4.79086 3 3 4.79086 3 7V17C3 19.2091 4.79086 21 7 21H17C19.2091 21 21 19.2091 21 17V7C21 4.79086 19.2091 3 17 3Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 12L11.25 14L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

    {props.title}
  </button>
);
