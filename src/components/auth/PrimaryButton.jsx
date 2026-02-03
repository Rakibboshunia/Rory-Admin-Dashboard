export default function PrimaryButton({
  children,
  onClick,
  type = "button",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full rounded-xl bg-blue-600 py-3 text-lg font-semibold text-white hover:bg-blue-700 transition cursor-pointer"
    >
      {children}
    </button>
  );
}
