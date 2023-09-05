import "./style.css";

type Props = {
  label: string;
  corClass: string;
};

export default function Button({ label, corClass }: Props) {
  const cssBase = "dsc-btn dsc-btn-";
  return <div className={cssBase.concat(corClass)}>{label}</div>;
}
