import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income: number, gdp: number, capita: number) {
  const budget = getBudgetObject(income, gdp, capita);
  
  const fullBudget = {
    ...budget,
    getIncomeInDollars(income: number) {
      return `$${income}`;
    },
    getIncomeInEuros(income: number) {
      return `${income} euros`;
    }
  };

  return fullBudget;
}
