import React, { useEffect, useState } from "react";
import styled from "styled-components";
import InstallButton from "../components/atoms/InstallButton";
import { useParams } from "react-router-dom";
import NoMatch from "./NoMatch";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import MetamaskSnapsExplorer from "../contracts/MetamaskSnapsExplorer.json";
import { ethers } from "ethers";
import { calculateRating } from "../utils";

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
  const [isLoading, setIsLoading] = useState(true);
  const [snap, setSnap] = useState();

  let { id } = useParams();

  const contract = new ethers.Contract(
    "0x9dA6F8a65b7fc0381b8d4e943C6E31DBB83BE74C",
    MetamaskSnapsExplorer.abi,
    ethers.getDefaultProvider(
      "https://rinkeby.infura.io/v3/d509fb5c95c04ae49799a35691d3d7bc"
    )
  );

  const getSnap = async () => {
    try {
      const snap = await contract.getSnap(id);
      setSnap(snap);
      setIsLoading(false);
      fetch(`https://api.npms.io/v2/package/${encodeURIComponent(snap[4])}`)
        .then((res) => res.json())
        .then((result) => {
          setItems(result);
        });
    } catch (e) {
      return <NoMatch />;
    }
  };

  useEffect(() => {
    if (!id) {
      return <NoMatch />;
    }

    getSnap(id);
  }, []);

  return (
    <Flexy>
      {
        isLoading ? (
          <h3>Loading...</h3>
        ) : (
          <Wrap>
            <img src={snap[5]} alt={snap[2]} />
            <Name>{snap[2]}</Name>
            <Description>{snap[7]}</Description>
            <InstallButton installation={snap[4]} />
            <Votes>
              Votes: {snap[8].toNumber() + snap[9].toNumber()} | Rating: {calculateRating(snap[8].toNumber(), snap[9].toNumber())} / 5 | Category: {snap[3]}
            </Votes>
          </Wrap>
        )
        // <ImageGrid>
        // <img
        //   src={`/snap-images/${snap.title}-1.png`}
        //   alt={snap[2]}
        //   onError={(event) =>
        //     event.target.setAttribute("style", "display:none")
        //   }
        // >
        //   <img
        //     src={`/snap-images/${snap.title}-2.png`}
        //     alt={snap[2]}
        //     onError={(event) =>
        //       event.target.setAttribute("style", "display:none")
        //     }
        //   />
        //   <img
        //     src={`/snap-images/${snap.title}-3.png`}
        //     alt={snap[2]}
        //     onError={(event) =>
        //       event.target.setAttribute("style", "display:none")
        //     }
        //   />
        // </ImageGrid>
        // <h3>Details</h3>
        // <FlexyRow>
        //   <div>
        //     <h4>GitHub</h4>
        //     {items?.collected?.metadata?.links?.repository ||
        //       items?.collected?.metadata?.repository?.url || <Skeleton />}
        //   </div>
        //   <div>
        //     <h4>Website</h4>
        //     {snap[6]}
        //   </div>
        //   <div>
        //     <h4>Offered by</h4>
        //     {items?.collected?.metadata?.author?.name ||
        //       items?.collected?.metadata?.publisher?.username || <Skeleton />}
        //   </div>
        //   <div>
        //     <h4>Version</h4>
        //     {items?.collected?.metadata?.version || <Skeleton />}
        //   </div>
        //   <div>
        //     <h4>Updated</h4>
        //     {items?.analyzedAt || <Skeleton />}
        //   </div>
        // </FlexyRow>
        // <h3>Description</h3>
        // <p>{snap[7]}</p>
      }
    </Flexy>
  );
};

export default SnapDetails;
