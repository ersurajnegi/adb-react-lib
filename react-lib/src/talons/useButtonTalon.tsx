import { useCallback, useEffect, useMemo, useState, useRef } from "react";
import { useButtonContext } from "../context/buttonContext";

export const useButton = (props = {}) => {
  const { counter, updateCount } = useButtonContext();
  return {
    counter,
    updateCount,
  };
};
