import styled from "styled-components";

export const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 20px;
`;

export const Container = styled.div`
  max-width: 800px;
`;

export const CheckListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 30px 0 0 0;
  padding: 0;
  list-style-type: none;
`;

export const TaskContainer = styled.li`
  display: flex;
  width: 100%;
  padding: 12px 20px;
  border-radius: 5px;
  margin-bottom: 15px;
  background-color: ghostwhite;
  transition: background-color 0.2s ease-in-out;
  text-align: left;
  line-height: 1.5;
  cursor: pointer;
  &:hover {
    background-color: ${({ checked }) =>
      checked ? "ghostwhite" : "limegreen"};
  }
  &:active {
    background-color: honeydew;
  }
  h4 {
    font-weight: bold;
    margin: 0;
  }
  span {
    display: inline-block;
    font-family: monospace;
  }
`;

export const TaskBody = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AllDoneContainer = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  img {
    width: 100%;
  }
`;

export const IconContainer = styled.div`
  width: 24px;
  height: 24px;
  margin-top: 1px;
  margin-right: 20px;
  svg {
    width: inherit;
    height: inherit;
    stroke: ${({ color }) => color};
    fill: ${({ color }) => color};
  }
`;
