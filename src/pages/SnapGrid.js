import * as React from "react";
import { useSearchParams } from "react-router-dom";
import { filterByCategory, SNAPS } from "../utils/MockSnaps";
import TopBanner from "../components/organisms/TopBanner";
import SnapItem from "../components/molecules/SnapItem";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const Snaps = styled.div`
  height: fit-content;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 12px;
  padding-top: 30px;
`;

const SnapGrid = () => {
  let [searchParams] = useSearchParams();
  let category = searchParams.get("category");

  const snaps = React.useMemo(() => {
    if (!category) return SNAPS;
    return filterByCategory(category);
  }, [category]);

  return (
    <Wrap>
      <TopBanner />
      <Snaps>
        {snaps.map((snap) => {
          return (
            <SnapItem
              key={snap.id}
              title={snap.title}
              description={snap.description}
              iconUrl={snap.iconUrl}
            />
          );
        })}
      </Snaps>
    </Wrap>
  );
};

export default SnapGrid;
