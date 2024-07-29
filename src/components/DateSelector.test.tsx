import { render, screen, fireEvent } from "@testing-library/react";
import DateSelector from "./DateSelector";

describe("DateSelector에 대한 테스트", () => {
  it("2022-07-22 날짜를 initDate로 넘겨주면 해당 날짜가 의도대로 보여져요.", () => {
    // Given
    const initDate = "2022-07-21";
    const handleDateChange = jest.fn();

    // When
    render(
      <DateSelector selectedDate={initDate} onDateChange={handleDateChange} />
    );

    // Then
    expect(screen.getByText(initDate)).toBeInTheDocument();
  });

  it("이전 날짜 버튼을 클릭하면 onDateChange 함수가 호출돼야 해요.", () => {
    // Given
    const initDate = "2022-07-21";
    const handleDateChange = jest.fn();
    render(
      <DateSelector selectedDate={initDate} onDateChange={handleDateChange} />
    );

    // When
    fireEvent.click(screen.getByText("←"));

    // Then
    expect(handleDateChange).toBeCalledTimes(1);
  });
});
