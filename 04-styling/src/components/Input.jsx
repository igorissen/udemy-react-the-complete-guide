export default function InputGroup ({ label, invalid, ...props }) {
  const labelClasses = 'block mb-2 text-xs font-bold tracking-wide uppercase'.split(' ');
  labelClasses.push(invalid ? 'text-red-400' : 'text-stone-200');
  const inputClasses = 'w-full px-3 py-2 leading-tight border rounded shadow'.split(' ');
  if (invalid) {
    inputClasses.push(...['text-red-500', 'bg-red-100', 'border-red-300']);
  } else {
    inputClasses.push(...['text-gray-700', 'bg-stone-200']);
  }

  return (
        <p>
            <label className={labelClasses.join(' ')}>{label}</label>
            <input className={inputClasses.join(' ')} {...props} />
        </p>
  );
}
