import { useCallback, useEffect, useMemo, useState, useRef } from "react";
import { useButtonContext } from "../context/buttonContext";

export const useButtonTalon = (props = {}) => {
  const { counter, updateCount, list, loadList } = useButtonContext();
  return {
    counter,
    updateCount,
    list,
    loadList,
  };
};
