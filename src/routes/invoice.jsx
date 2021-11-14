import { useParams } from "react-router-dom";

export default function Invoice() {
  const params = useParams();
  params.id;
  return <h2>Invoice {params.id}</h2>;
}
