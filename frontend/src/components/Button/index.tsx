import "./style.css";

type Props = {
  label: string;
  corClass: string;
};

export default function Button({ label, corClass }: Props) {
  return <div className={corClass}>{label}</div>;
}
