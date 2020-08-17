import React from "react";
import PizzaList from "./PizzaList";
import GlobalStyles from "./styles/globalStyles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AboutPizza from "./AboutPizza";
import Currency from "./components/Currency";
import { Block, Button } from "../src/components/styledComponents";
import Avatar from "../src/assets/images/avatar.jpg";
import { useDispatch } from "react-redux";
import { changeValute } from "./store/Action/PizzaAction";

function App() {
  const dispatch = useDispatch();
  const handleChangeValute = name => {
    dispatch(changeValute(name));
  };
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Block
          flex
          direction="row"
          BImage={`url(${Avatar})`}
          BImageRepeat
          BAttachment="fixed"
          justifyContent="space-between"
        >
          <Switch>
            <Block width="80%">
              <Route exact path="/" render={() => <PizzaList />} />
              <Route
                exact
                path="/aboutpizza/:id"
                render={() => <AboutPizza />}
              />
            </Block>
          </Switch>
          <Block
            width="22%"
            MinHeight="300px"
            background="#ffffffd4"
            flex
            position="fixed"
            top="50%"
            transform="translateY(-50%)"
            right="0"
            bottom="0"
            radius="10% 0 0 10% "
          >
            <Currency />
          </Block>
          <Block
            flex
            width="10%"
            height="30px"
            alignItems="center"
            position="fixed"
            right="1%"
            top="10"
          >
            <Button
              flex
              size="15px"
              padding=" 0.25em 1em"
              border="1px solid grey"
              radius="3px"
              outline="none"
              background="#d6d5c6"
              cursor="pointer"
              name="dollar"
              type="button"
              onClick={e => handleChangeValute(e.target.name)}
            >
              Dollar
            </Button>
            <Button
              flex
              size="15px"
              padding=" 0.25em 1em"
              border="1px solid grey"
              radius="3px"
              outline="none"
              background="#d6d5c6"
              cursor="pointer"
              name="euro"
              type="button"
              onClick={e => handleChangeValute(e.target.name)}
            >
              Euro
            </Button>
          </Block>
        </Block>
      </BrowserRouter>
    </>
  );
}

export default App;
