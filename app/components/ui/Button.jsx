export default function Button({
  title,
  clickFunction,
  disabled,
  condition = 'true',
}) {
  return (
    <button
      className="bg-slate-700 text-white p-4 rounded w-max flex gap-4 items-center duration-300 hover:bg-slate-600 disabled:text-slate-500 disabled:cursor-not-allowed disabled:bg-slate-100"
      onClick={clickFunction}
      disabled={disabled}
    >
      {title}{' '}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 24 24"
      >
        <path
          fill={condition ? 'yellowgreen' : 'grey'}
          stroke={condition ? 'yellowgreen' : 'grey'}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
          d="M6.906 4.537A.6.6 0 0 0 6 5.053v13.894a.6.6 0 0 0 .906.516l11.723-6.947a.6.6 0 0 0 0-1.032z"
        />
      </svg>
    </button>
  )
}
