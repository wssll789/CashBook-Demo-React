import { Link, useParams } from "react-router-dom";
import React, { useEffect, useLayoutEffect, useState } from "react";
import styled from "styled-components";
import { TopBar } from "./AddTag";
import Icon from "../components/Icon";
import { useRecords } from "../hooks/useRecords";
import { useTags } from "../hooks/useTags";
import { useDate } from "../hooks/useDate";
import { AddButton, DeleteButton } from "./PayTagEdit";
type Params = {
  id: any;
};
const RecordBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: rgb(254, 251, 240);
  user-select: text;
  -webkit-user-select: text;
  > header {
    font-weight: bolder;
  }
`;
export const CategorySelectBox = styled.ul`
  display: flex;
  > li {
    margin-right: 10px;
    color: darkgrey;
  }
  .selected {
    color: black;
    border-bottom: 2px solid rgb(246, 50, 50);
  }
`;
const RecordInfoBox = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 10px 20px;
  user-select: text;
  -webkit-user-select: text;
  > div {
    padding: 5px 0px;
    display: flex;
    border-bottom: 1px solid black;
    justify-content: space-between;
    align-items: center;
    height: 30px;
    overflow: hidden;
    user-select: text;
    -webkit-user-select: text;
    > span {
      margin-right: 10px;
      margin-left: 10px;
      > svg {
        height: 20px;
        width: 20px;
      }
    }
    > ul {
      display: flex;
      > li {
        margin-right: 10px;
        color: darkgrey;
      }
      .selected {
        color: black;
        border-bottom: 1.5px solid rgb(246, 50, 50);
      }
    }
    > input {
      background: none;
      user-select: text;
      -webkit-user-select: text;
      border: none;
      width: 30%;
      direction: rtl;
      margin-right: 10px;
    }
  }
`;
const ButtonBox = styled.div`
  margin-top: 100px;
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  > button {
    width: 30%;
    border: none;
    color: white;
    font-size: 18px;
    font-weight: bolder;
    &.delete {
      background-color: rgb(239, 112, 100);
      box-shadow: inset -2px -3px 0px rgba(0, 0, 0, 0.25);
    }
    &.edit {
      background-color: rgb(239, 167, 175);
      box-shadow: inset -2px -3px 0px rgba(0, 0, 0, 0.25);
    }
  }
`;
export const RecordsEdit: React.FC = () => {
  //   const { id } = useParams<Params>();
  //   const { getName, findTag, IconMap } = useTags();
  const { findRecord, deleteRecord, updateRecord } = useRecords();
  //   const { findDay } = useDate();
  let record = findRecord(1);
  console.log("aaaaa");
  return <div>404 NOT FOUND</div>;
};
