// Given: 날짜 객체가 주어졌을 때
// When: formatDate 함수를 호출하면
// Then: yyyy-MM-dd 형식의 문자열이 반환돼야 해요.

import { formatDate } from "./date";

test("formatDate 함수에 날짜 객체를 전달하면 yyyy-MM-dd 형식의 문자열을 반환해야 합니다.", () => {
  // Given
  const date = new Date("2024-07-22");

  // When
  const result = formatDate(date);

  // Then
  expect(result).toBe("2024-07-22");
});
