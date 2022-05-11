import NoMatch from "./NoMatch";
import { useParams } from "react-router-dom";

const TestCatalog = () => {
  let { id } = useParams();

  if (!id) {
    return <NoMatch />;
  }

  // let snkr = getSneakerById(id);
  //
  // if (!snkr) {
  //   return <NoMatch />;
  // }

  // let name = `${snkr.brand} ${snkr.model} ${snkr.colorway}`;

  return (
    <div>
      {/*<h2>{name}</h2>*/}
      {/*<img*/}
      {/*  width={400}*/}
      {/*  height={400}*/}
      {/*  style={{*/}
      {/*    borderRadius: "8px",*/}
      {/*    maxWidth: "100%",*/}
      {/*    aspectRatio: "1 / 1",*/}
      {/*  }}*/}
      {/*  src={snkr.imageUrl}*/}
      {/*  alt={name}*/}
      />
    </div>
  );
};

export default TestCatalog;