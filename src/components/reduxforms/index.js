import {
  Button,
  Container,
  InputLabel,
  Input,
  FormGroup,
  Stack,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkValidChilds } from "../../constants/routes";
import { updatUserName } from "../../store/action/user";
import { UPDATE_CREDENTIAL } from "../../store/utils";

const ReduxForms = (props) => {
  const credentails = useSelector((state) => state.user);
  console.log(credentails);
  const dispatch = useDispatch();

  const router = useNavigate();

  useEffect(() => {
    if (checkValidChilds.includes(credentails.username)) {
      //   router("/");
    }
  }, [credentails]);

  const [showData, setShowData] = useState(false);
  const handleInput = (e) => {
    const { value, name } = e.target;

    dispatch({ type: UPDATE_CREDENTIAL, payload: { [name]: value } });
  };

  return (
    <>
      <Container maxWidth="xl">
        <Stack spacing={2}>
          <FormGroup onChange={handleInput}>
            <InputLabel htmlFor="username">username</InputLabel>
            <Input
              id="username"
              name="username"
              placeholder="username"
              value={credentails.username}
            />
            <InputLabel htmlFor="password">password</InputLabel>
            <Input
              id="password"
              type="password"
              name="password"
              placeholder="password"
              value={credentails.password}
            />
          </FormGroup>
          <Button
            color="primary"
            variant="outlined"
            onClick={() => setShowData((prev) => !prev)}
          >
            show credentails
          </Button>
        </Stack>
        {showData ? (
          <>
            <div>username: {credentails.username}</div>
            <div>password: {credentails.password}</div>
          </>
        ) : (
          <></>
        )}
      </Container>
    </>
  );
};

export default ReduxForms;
