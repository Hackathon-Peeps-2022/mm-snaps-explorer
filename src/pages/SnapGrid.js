import * as React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { filterByCreator, SNAPS } from "../utils/MockSnaps";
import VisuallyHidden from "@reach/visually-hidden";

const SnapGrid = () => {
  let [searchParams] = useSearchParams();
  let category = searchParams.get("category");

  const snaps = React.useMemo(() => {
    if (!category) return SNAPS;
    return filterByCreator(category);
  }, [category]);

  return (
    <>
      <h2>Snaps</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
          gap: "12px 24px",
        }}
      >
        {snaps.map((snap) => {
          let name = `${snap.creator} ${snap.installation} ${snap.title}`;
          return (
            <div key={snap.id} style={{ position: "relative" }}>
              <img
                width={200}
                height={200}
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
                to={`/sneakers/${snap.id}`}
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