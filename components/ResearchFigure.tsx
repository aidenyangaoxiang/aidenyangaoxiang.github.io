/** Conceptual placeholders, not experimental figures or reported results. */
export function ResearchFigure({ id }: { id: string }) {
  const labels: Record<string, { top: string; bottom: string; blocks: string[] }> = {
    pave: { top: "PAVE", bottom: "Persistent visual experience", blocks: ["Past interactions", "Experience retrieval", "Visual-token selection", "Frozen action model"] },
    "clip-lora": { top: "CLIP + LoRA", bottom: "Robust representation adaptation", blocks: ["CLIP representations", "Few-shot LoRA", "Representation fusion", "Distribution robustness"] },
    memnav: { top: "IMAGE-GOAL NAVIGATION", bottom: "Simulation · integration · experiments", blocks: ["Goal image", "Perception", "Navigation & planning", "Simulated environment"] },
    "sign-language": { top: "VTAMO · ECCV 2026", bottom: "Cross-modal correspondence", blocks: ["Visual sign sequences", "Optimal Transport", "Alignment", "Language representations"] },
  };
  const figure = labels[id];
  if (!figure) return <div className="figure-fallback">Research figure forthcoming</div>;
  return <div className={`concept-figure concept-figure--${id}`} role="img" aria-label={`Conceptual illustration: ${figure.blocks.join(", ")}. Placeholder for a project figure.`}>
    <span className="figure-kicker">{figure.top}</span>
    <div className="figure-flow">{figure.blocks.map((block, index) => <div className={`figure-node figure-node--${index}`} key={block}><span className="figure-node-index">0{index + 1}</span><span>{block}</span></div>)}</div>
    <span className="figure-caption">{figure.bottom}</span>
  </div>;
}
