import { createContext, useState, useEffect } from "react";
import { useGetFundraisersList } from "../Use/useGetFundraisersList";
import { useSetDonations } from "../Use/useSetDonations";

export const Global = createContext();

export const GlobalProvider = ({ children }) => {
  const [route, setRoute] = useState("fundraisers");

  const [createList, setUpdate, loading, message, setErrorMessage] =
    useGetFundraisersList();
  const [response, setDonation, setDestroyFundraiser, setErrMsg, errMsg] =
    useSetDonations();

  useEffect(() => {
    setUpdate(Date.now());
  }, [setUpdate, response]);

  return (
    <Global.Provider
      value={{
        route,
        setRoute,
        loading,
        createList,
        response,
        setDonation,
        setDestroyFundraiser,
        message,
        setErrorMessage,
        setErrMsg,
        errMsg,
      }}
    >
      {children}
    </Global.Provider>
  );
};
