export interface TypedNumbers {
  typedNumbers: number[];
}
export interface TicketBody {
  uuid: string;
  creationDateTime: string;
  drawDateTime: string;
  expirationDateTime: string;
  status: string;
}

export interface lotteryResultsBody {
  isWinner: boolean;
  winningNumbers: number[];
  typedNumbers: number[];
  matchedNumbers: number[];
}
