import "./style.css";

type Props = {
  name: string;
};

export default function Tag({ name }: Props) {
  return <div className="dsc-category">{name}</div>;
}
