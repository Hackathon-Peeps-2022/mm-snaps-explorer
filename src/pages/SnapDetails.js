import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InstallButton from "../components/atoms/InstallButton";
import { useParams } from "react-router-dom";
import NoMatch from "./NoMatch";
import { getSnapById } from "../utils/MockSnaps";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Wrap = styled.div`
  max-width: 800px;
  padding: 1em;
  gap: 1em;
  display: grid;
  grid-template:
    "img name name name"
    "img description description install"
    "img votes votes votes";
  > img {
    grid-area: img;
    height: 120px;
  }
  height: 120px;
`;

const Name = styled.div`
  grid-area: name;
  font-weight: 700;
  font-size: 18px;
`;

const Flexy = styled.div`
  display: flex;
  flex-direction: column;
`;
const FlexyRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const Description = styled.div`
  grid-area: description;
  font-weight: 400;
  font-size: 12px;
  line-height: 24px;
  letter-spacing: 0.75px;
`;

const Votes = styled.div`
  grid-area: votes;
`;

const ImageGrid = styled.div`
  display: grid;
  > img {
    filter: drop-shadow(0px 2px 7px rgba(0, 0, 0, 0.15));
    border-radius: 2%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  height: fit-content;
  grid-template-columns: repeat(auto-fill, 400px);
  gap: 1em;
  padding-top: 20px;
`;

const SnapDetails = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.npms.io/v2/package/${encodeURIComponent(snap.installation)}`
    )
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
      });
  });

  let { id } = useParams();

  if (!id) {
    return <NoMatch />;
  }

  let snap = getSnapById(id);

  if (!snap) {
    return <NoMatch />;
  }

  return (
    <Flexy>
      <Wrap>
        <img src={snap.iconUrl} alt={snap.name} />
        <Name>{snap.title}</Name>
        <Description>{snap.description}</Description>
        <InstallButton installation={snap.installation} />
        <Votes>Votes blah blah | Rating blah blah | Category blah blah</Votes>
      </Wrap>
      <ImageGrid>
        <img
          src={`/snap-images/${snap.title}-1.png`}
          alt={snap.name}
          onError={(event) =>
            event.target.setAttribute("style", "display:none")
          }
        />
        <img
          src={`/snap-images/${snap.title}-2.png`}
          alt={snap.name}
          onError={(event) =>
            event.target.setAttribute("style", "display:none")
          }
        />
        <img
          src={`/snap-images/${snap.title}-3.png`}
          alt={snap.name}
          onError={(event) =>
            event.target.setAttribute("style", "display:none")
          }
        />
      </ImageGrid>
      <h3>Details</h3>
      <FlexyRow>
        <div>
          <h4>GitHub</h4>
          {items?.collected?.metadata?.links?.repository ||
            items?.collected?.metadata?.repository?.url || <Skeleton />}
        </div>
        <div>
          <h4>Website</h4>
          {snap.dapp}
        </div>
        <div>
          <h4>Offered by</h4>
          {items?.collected?.metadata?.author?.name ||
            items?.collected?.metadata?.publisher?.username || <Skeleton />}
        </div>
        <div>
          <h4>Version</h4>
          {items?.collected?.metadata?.version || <Skeleton />}
        </div>
        <div>
          <h4>Updated</h4>
          {items?.analyzedAt || <Skeleton />}
        </div>
      </FlexyRow>
      <h3>Description</h3>
      <p>{snap.description}</p>
    </Flexy>
  );
};

export default SnapDetails;
