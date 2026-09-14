export function ArchitectureFlow({ items }: { items: string[] }) {
  return (
    <div className="architecture-flow" aria-label={`Architecture hierarchy: ${items.join(" to ")}`}>
      {items.map((item, index) => (
        <div className="flow-step" key={item}>
          <span className="flow-number">{String(index + 1).padStart(2, "0")}</span>
          <span>{item}</span>
          {index < items.length - 1 && <i aria-hidden="true">→</i>}
        </div>
      ))}
    </div>
  );
}
