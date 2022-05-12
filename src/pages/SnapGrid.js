import * as React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { filterByCategory, SNAPS } from "../utils/MockSnaps";
import VisuallyHidden from "@reach/visually-hidden";

const SnapGrid = () => {
  let [searchParams] = useSearchParams();
  let category = searchParams.get("category");

  const snaps = React.useMemo(() => {
    if (!category) return SNAPS;
    return filterByCategory(category);
  }, [category]);

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "12px 24px",
        }}
      >
        {snaps.map((snap) => {
          let name = `${snap.creator} ${snap.installation} ${snap.title}`;
          return (
            <div
              key={snap.id}
              style={{ position: "relative", border: "1px dashed red" }}
            >
              <img
                width={100}
                height={100}
                src={snap.iconUrl}
                alt={name}
                style={{
                  borderRadius: "8px",
                  width: "100%",
                  height: "auto",
                  aspectRatio: "1 / 1",
                }}
              />
              <Link
                style={{ position: "absolute", inset: 0 }}
                to={`/snap/${snap.id}`}
              >
                <VisuallyHidden>{name}</VisuallyHidden>
              </Link>
              <div>
                <p>{name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SnapGrid;
