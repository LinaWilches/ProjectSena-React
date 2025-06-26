import HeaderLg from './components/HeaderLg'
import BannerLw from './components/BannerLw'
import FilterLw from './components/FilterLw'

export default function ProductsLw() {
  return (
    <>
        <HeaderLg />
        <BannerLw titulo = {'Productos'} subtitle = {'Gatos'}/>
        <FilterLw title = {'Filtros'}/>
    </>
  )
}
