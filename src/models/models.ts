export interface TypedNumbers {
  typedNumbers: string[];
}
export interface TicketBody {
  uuid: string;
  creationDateTime: string;
  expirationDateTime: string;
  status: string;
}

export interface lotteryResultsBody {
  isWinner: boolean;
  winningNumbers: number[];
  typedNumbers: number[];
  matchedNumbers: number[];
}

export interface ThemeType {
  background: string;
  textPrimary: string;
  textSecondary: string;
  textHighlited: string;
  buttonHover: string;
}
