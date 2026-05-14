// export default function ShiftUpLogo() {
//   return (
//     <div className="relative flex items-center">

//       {/* TEXT */}
//       <h1 className="text-5xl font-extrabold tracking-tight">

//         <span className="text-[#1F2A44]">
//           Shift
//         </span>

//         <span className="text-[#1F2A44]">
//           Up
//         </span>

//       </h1>

//       {/* ARROW */}
//       <div className="absolute left-[145px] top-[8px] rotate-12">

//         <div className="relative h-[10px] w-[120px] rounded-full bg-[#1F2A44]">

//           <div className="absolute right-[-2px] top-[-7px] h-0 w-0 border-b-[12px] border-l-[18px] border-t-[12px] border-b-transparent border-l-[#1F2A44] border-t-transparent">
//           </div>

//         </div>

//       </div>

//     </div>
//   );
// }
export default function ShiftUpLogo() {
  return (
    <div className="relative flex items-center">

      {/* TEXT */}
      <h1 className="relative text-5xl font-extrabold tracking-tight">

        <span className="text-[#1F2A44]">
          Shift
        </span>

        {/* U + P */}
        <span className="relative text-[#1F2A44]">

          U

          {/* CURVED ARROW */}
          <span className="absolute left-[18px] top-[-6px]">

              <svg
    width="90"
    height="45"
    viewBox="0 0 90 45"
    fill="none"
  >
    <path
      d="M0 30 C25 12, 50 10, 78 5"
      stroke="#1F2A44"
      strokeWidth="6"
      strokeLinecap="round"
      fill="none"
    />

    <path
      d="M72 1 L84 5 L75 15"
      fill="none"
      stroke="#1F2A44"
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>

          </span>

        </span>

        <span className="text-[#1F2A44]">
          p
        </span>

      </h1>

    </div>
  );
}