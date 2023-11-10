import s from "./styles.module.css";

type Props = {
  onClick?: () => void;
};

export const BurgerMenu = ({ onClick }: Props) => {
  return (
    <>
      <div className={s.burger} onClick={onClick}>
        <div className={s.burgerItem} />
        <div className={s.burgerItem} />
        <div className={s.burgerItem} />
      </div>
    </>
  );
};
