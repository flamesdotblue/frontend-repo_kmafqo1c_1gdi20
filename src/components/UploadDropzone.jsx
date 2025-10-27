import React, { useRef, useState } from 'react';

export default function UploadDropzone({
  label = 'Upload files',
  accept = 'image/*',
  multiple = false,
  onFiles = () => {},
  capture,
}) {
  const inputRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [previews, setPreviews] = useState([]);

  const openDialog = () => inputRef.current?.click();

  const handleFiles = (fileList) => {
    const files = Array.from(fileList || []);
    if (!files.length) return;
    // Generate previews
    const nextPreviews = files.map((f) => ({
      name: f.name,
      url: URL.createObjectURL(f),
      type: f.type,
      size: f.size,
    }));
    setPreviews(multiple ? (prev) => [...prev, ...nextPreviews] : nextPreviews);
    onFiles(files);
  };

  const onDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer?.files) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const onDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const onDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  return (
    <div>
      <div
        onClick={openDialog}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        className={`w-full border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition ${
          isDragging ? 'border-emerald-500 bg-emerald-50/50' : 'border-slate-300 hover:border-emerald-400'
        }`}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && openDialog()}
        aria-label={label}
      >
        <div className="text-slate-600">
          <div className="font-medium">{label}</div>
          <div className="text-xs mt-1">Drag & drop or click to browse</div>
          <div className="mt-3 inline-flex items-center gap-2 text-xs text-slate-500">
            <span>Accepted:</span>
            <code className="px-1.5 py-0.5 rounded bg-slate-100">{accept}</code>
          </div>
        </div>
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          capture={capture}
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />
      </div>

      {previews.length > 0 && (
        <div className="mt-4">
          <div className="text-sm text-slate-700 mb-2">Selected: {previews.length} file(s)</div>
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 gap-3">
            {previews.map((p, idx) => (
              <figure key={p.url + idx} className="rounded-lg overflow-hidden border border-slate-200 bg-white">
                {p.type.startsWith('image/') ? (
                  <img src={p.url} alt={p.name} className="w-full h-20 object-cover" />
                ) : (
                  <div className="w-full h-20 flex items-center justify-center text-xs text-slate-500">{p.name}</div>
                )}
                <figcaption className="text-[10px] p-1 truncate text-slate-500">{p.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
