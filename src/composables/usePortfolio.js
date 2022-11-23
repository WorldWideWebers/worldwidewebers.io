import { ref } from 'vue'
import portfolio from '../portfolio.json'

const enterprise = portfolio.filter(item => item.category === 'enterprise').sort(function (a, b) {
    return a.sequence - b.sequence;
});
const nonEnterprise = portfolio.filter(item => item.category === 'non-enterprise').sort(function (a, b) {
    return a.sequence - b.sequence;
});
const currentPortfolioItem = ref(null)

export function usePortfolio() {
    function setPortfolioItem(id) {
        const currentItem = portfolio.find(item => item.id === id)
        currentPortfolioItem.value = currentItem
    }
    return { enterprise, nonEnterprise, setPortfolioItem, currentPortfolioItem }
}