import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { useSelector, useDispatch } from "react-redux";
import { getBasketProducts } from "../store/Selectors/BasketSelectors";
import ModalItems from "./modalItems";
import { Block, Button } from "../components/styledComponents";
import { getCheckedValute } from "../store/Selectors/AllPizzaSelectors/getCheckedValute";
import { clearStateAction } from "../store/Action/PizzaAction";
import { useHistory } from "react-router-dom";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function SimpleModal({ total }) {
  const checkValute = useSelector(getCheckedValute);
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const pizzas = useSelector(getBasketProducts);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    handleClose();
    dispatch(clearStateAction());
    history.push("/");
  };

  const body = (
    <Block
      style={modalStyle}
      className={classes.paper}
      widh="100%"
      top="50% !important"
      left="50% !important"
      tranform="translate(-50% -50%) !important"
      flex
      direction="column"
      justifyContent="center"
    >
      {pizzas.length
        ? pizzas.map(elem => (
            <ModalItems
              title={elem.title}
              quantity={elem.quantity}
              price={elem.price}
            />
          ))
        : "no product"}
      <Block flex alignItems="flex-end">
        Delivery: {checkValute ? "+8€" : "+10$"}
      </Block>
      <Block width="100%" height="2px" background="black" />
      <Block
        flex
        direction="row"
        justifyContent="space-between"
        margin="20px 0 0 0"
      >
        <Block>
          total{"  "}
          {total}
          {checkValute ? "€" : "$"}
        </Block>
        <Button
          size="15px"
          padding=" 0.25em 1em"
          border="1px solid grey"
          radius="3px"
          outline="none"
          background="white"
          cursor="pointer"
          onClick={handleConfirm}
          disabled={!pizzas.length}
        >
          Confirm
        </Button>
      </Block>
    </Block>
  );

  return (
    <Block>
      <Button
        type="button"
        onClick={handleOpen}
        flex
        size="13px"
        padding=" 0.25em 1em"
        border="none"
        radius="3px"
        outline="none"
        background="white"
        name="decrement"
        cursor="pointer"
        border="1px solid grey"
      >
        Order
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </Block>
  );
}
