import axios, { AxiosError, AxiosResponse } from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { lotteryResultsBody, TicketBody, TypedNumbers } from '../models/models';

let ticket = <TicketBody>{};
let lotteryResults = <lotteryResultsBody>{};

export const useApi = () => {
  const navigate = useNavigate();
  const [postRequestError, setPostRequestError] = useState(false);
  const [getRequestError, setGetRequestError] = useState(false);
  const [winningNumbersGenerated, setWinningNumbersGenerated] = useState(false);

  const sendNumbers = (numbers: TypedNumbers) => {
    axios
      .post('/api/api/v1/receiver', numbers)
      .then((response: AxiosResponse) => {
        ticket = response.data;
        navigate('/ticket');
      })
      .catch((error: AxiosError) => {
        if (error) setPostRequestError(true);
        else setPostRequestError(false);
      });
  };

  const getResults = (ticketId: string) => {
    axios
      .get(`/api/api/v1/results/${ticketId}`)
      .then((response: AxiosResponse) => {
        lotteryResults = response.data;
        navigate('/checkResults/results');
      })
      .catch((error: AxiosError) => {
        if (error) setGetRequestError(true);
        else setGetRequestError(false);
      });
  };

  const generateWinningNumbers = () => {
    axios
      .get('/api/generate')
      .then(() => setWinningNumbersGenerated(true))
      .catch((error: AxiosError) => {
        if (error) setGetRequestError(true);
        else setGetRequestError(false);
      });
  };

  return {
    sendNumbers,
    ticket,
    getResults,
    generateWinningNumbers,
    lotteryResults,
    postRequestError,
    getRequestError,
    winningNumbersGenerated,
  };
};
