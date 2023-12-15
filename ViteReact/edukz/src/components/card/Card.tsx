import { FC, useEffect } from 'react';
import { useGetProductsByIdQuery } from '../../service/products';

const Card:FC = () => {

    const { isError, isLoading, data } = useGetProductsByIdQuery('2');


    return (
            <div>
                {isError ? (
                  <>Oh no, there was an error</>
                ) : isLoading ? (
                  <>Loading...</>
                ) : data ? (
                  <>
                    <h3>{data.title}</h3>
                    <img src={data.image} alt={data.title} width="200px"/>
                    <p>{data.description}</p>
                    <h6>{data.category}</h6>
                    <h5>{data.price}</h5>
                  </>
                ) : null}
            </div>
    )
}

export default Card;