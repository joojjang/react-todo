import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Todo from "./Todo";

// 테스트 설명: 사용자가 새로운 Todo를 추가할 때 제대로 추가되는지 확인
test("should add a new todo item", async () => {
  // Given: 애플리케이션을 렌더링
  render(<Todo />);

  // 입력 필드와 버튼을 가져오기
  const input = await screen.findByTestId("new-todo-input"); // 입력 필드 검색
  const addButton = screen.getByText("추가"); // 추가 버튼 검색

  // When: 새로운 Todo 입력 후 추가 버튼 클릭
  fireEvent.change(input, { target: { value: "New Todo Item" } }); // 입력 필드에 값 입력
  fireEvent.click(addButton); // 추가 버튼 클릭

  // Then: 새로운 Todo가 목록에 추가되었는지 확인
  expect(screen.getByText("New Todo Item")).toBeInTheDocument(); // Todo 항목이 문서에 있는지 확인
});
