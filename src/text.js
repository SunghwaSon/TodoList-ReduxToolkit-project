import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Layout } from "../components";
import {
  clearTodo,
  __getTodoThunk,
  __updateTodoThunk,
} from "../redux/modules/todoSlice";
import { Button, Text } from "../elem";
import { flex } from "../lib";
import Comments from "../features/comments/Comments";

const Todo = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const [isEditMode, setIsEditMode] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState("");
  const todo = useSelector((state) => state.todo.todo);

  useEffect(() => {
    dispatch(__getTodoThunk(id));
    return () => dispatch(clearTodo());
  }, [dispatch, id]);

  useEffect(() => {
    setUpdatedTodo(todo.body);
  }, [todo]);

  const onSaveButtonHandler = () => {
    if (updatedTodo.trim() === "") {
      return alert("입력된 내용이 없습니다.");
    }
    dispatch(
      __updateTodoThunk({
        ...todo,
        body: updatedTodo,
      })
    );
    setIsEditMode(false);
  };

  return (
    <>
      <Layout
        bgColor="
    #fff"
      >
        {!isEditMode && (
          <StTodoHeader>
            <Text size="24">id: ({todo?.id})</Text>
            <Text
              size="24"
              onClick={() => {
                navigate("/works");
              }}
            >
              이전으로
            </Text>
          </StTodoHeader>
        )}

        <Text size="32" fw="700">
          {todo?.title}
        </Text>
        <StBody>
          {isEditMode ? (
            <>
              <Textarea
                name="body"
                rows="10"
                maxLength={200}
                value={updatedTodo}
                onChange={(event) => {
                  setUpdatedTodo(event.target.value);
                }}
              />
            </>
          ) : (
            <Text size="18">{todo?.body}</Text>
          )}

          <StButtonGroup>
            {isEditMode ? (
              <Button size="large" onClick={onSaveButtonHandler}>
                저장
              </Button>
            ) : (
              <Button
                size="large"
                onClick={() => {
                  setIsEditMode(true);
                }}
              >
                수정
              </Button>
            )}
          </StButtonGroup>
        </StBody>
        {!isEditMode && <Comments />}
      </Layout>
    </>
  );
};