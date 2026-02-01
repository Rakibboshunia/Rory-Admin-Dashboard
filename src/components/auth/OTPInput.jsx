export default function OTPInput() {
  return (
    <div className="flex justify-center gap-2">
      {[...Array(5)].map((_, i) => (
        <input
          key={i}
          maxLength={1}
          className="h-12 w-12 rounded-md border border-gray-300 text-center text-lg focus:border-blue-500 focus:outline-none"
        />
      ))}
    </div>
  );
}
