import getBudgetObject from './7-getBudgetObject';

export default function getFullBudgetObject(income: number, gdp: number, capita: number) {
  return {
    ...getBudgetObject(income, gdp, capita),
    getIncomeInDollars: (income: number) => `$${income}`,
    getIncomeInEuros: (income: number) => `${income} euros`,
  };
}
