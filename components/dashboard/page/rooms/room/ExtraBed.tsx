"use client";
export function ExtraBed() {
  return (
    <details className="group border border-neutral-300 rounded-lg p-4">
      <summary className="cursor-pointer select-none flex items-center gap-2">
        <span className="font-medium">Enable ratio</span>
        <span className="ml-auto text-sm text-neutral-500 group-open:hidden">
          Show
        </span>
        <span className="ml-auto text-sm text-neutral-500 hidden group-open:inline">
          Hide
        </span>
      </summary>

      <div className="mt-4 p-3 border rounded-md bg-neutral-50">
        <label className="block font-medium mb-1">Ratio options</label>
        <input
          type="text"
          placeholder="Enter ratio"
          className="w-full border rounded-md p-2"
        />
      </div>
    </details>
  );
}
