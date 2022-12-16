import {
  Button,
  Container,
  InputLabel,
  Input,
  FormGroup,
  Stack,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UPDATE_CREDENTIAL } from "../../store/utils";

const ReduxForms = (props) => {
  const credentails = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const router = useNavigate();

  const handleInput = (e) => {
    const { value, name } = e.target;
    dispatch({ type: UPDATE_CREDENTIAL, payload: { [name]: value } });
  };

  const loginHandler = () => {
    if (
      credentails.username === "vamsi123" &&
      credentails.password === "12345"
    ) {
      router("/profiles");
    }
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
            onClick={() => loginHandler((prev) => !prev)}
          >
            Login
          </Button>
        </Stack>
        <Button onClick={() => router("/first")}>First</Button>
      </Container>
    </>
  );
};

export default ReduxForms;
