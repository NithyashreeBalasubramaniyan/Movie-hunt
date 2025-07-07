import { useSearchParams } from "react-router-dom"
import { Fetch } from "../config/Fetch"
import { Card } from "../components/Card"
export const Search = ({apipath}) => {
  const [searchParam]=useSearchParams()
  const queryTerm=searchParam.get('q')
  const {data:movies}=Fetch(apipath,queryTerm)
  return (
    <div className="main container mt-5">
      <div className="row container  justify-content-center row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 py-2 ">
                    {movies.map((movie) => (
                        <Card key={movie.id} {...movie} />
                      ))}
                </div>
    </div>
  )
}
