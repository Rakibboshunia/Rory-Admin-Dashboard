export default function PrimaryButton({ children }) {
  return (
    <button className="w-full rounded-md bg-blue-600 py-2 text-sm font-semibold text-white hover:bg-blue-700 transition cursor-pointer">
      {children}
    </button>
  );
}
